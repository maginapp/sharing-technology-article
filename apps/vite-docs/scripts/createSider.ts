import fs from 'fs/promises';
import path from 'path';
import { DefaultTheme } from 'vitepress';
import { path2title } from '../contants/scripts-config';
import { text } from 'stream/consumers';

/**
 * 从 Markdown 文件中提取标题
 * @param {string} filePath - 文件路径
 * @returns {Promise<string|null>} - 提取的标题
 */
async function extractTitleFromMarkdown(filePath) {
  try {
    const content = await fs.readFile(filePath, 'utf-8');

    // 优先从 YAML frontmatter 中提取 title
    const frontmatterMatch = content.match(/^---\s*[\s\S]*?\btitle:\s*(.+?)\s*(?:\n|$)[\s\S]*?---/i);
    if (frontmatterMatch) {
      return frontmatterMatch[1].trim();
    }

    // 如果没有，提取第一个一级标题 (#)
    const headingMatch = content.match(/^#\s+(.+?)$/m);
    if (headingMatch) {
      return headingMatch[1].trim();
    }

    // 如果都没有，返回 null
    return null;
  } catch (error) {
    console.error(`Failed to read file: ${filePath}`, error);
    return null;
  }
}

/**
 * 获取路径对应的标题
 * @param {string} relativePath - 相对路径
 * @param {string} folderPath - 文件夹路径
 * @param {boolean} isFile - 是否为文件
 * @returns {Promise<string>} - 提取的标题
 */
async function getTitle(relativePath, folderPath, isFile = false) {
  // 优先从 path2title 中读取
  if (path2title[relativePath]) {
    return path2title[relativePath];
  }

  if (!isFile) {
    // 尝试从文件夹的 index.md 中提取标题
    const indexPath = path.join(folderPath, 'index.md');
    try {
      const title = await extractTitleFromMarkdown(indexPath);
      if (title) return title;
    } catch {
      // index.md 不存在或读取失败时继续
    }
  } else {
    // 尝试从当前文件中提取标题
    try {
      const title = await extractTitleFromMarkdown(folderPath);
      if (title) return title;
    } catch {
      // 文件读取失败时继续
    }
  }

  // 最后默认使用路径名
  return relativePath.split('/').filter(Boolean).pop(); // 获取路径名的最后一部分
}

/**
 * 遍历文件夹并生成配置项
 * @param {string} currentPath - 当前文件夹路径
 * @param {string} relativePath - 相对路径
 * @returns {Promise<Array>} - 生成的 items 数组
 */
async function traverseDirectory(currentPath, relativePath) {
  const items: DefaultTheme.SidebarItem[] = [];
  const entries = await fs.readdir(currentPath, { withFileTypes: true });

  for (const entry of entries) {
    const entryPath = path.join(currentPath, entry.name);
    const entryRelativePath = path.join(relativePath, entry.name);

    // 跳过以 _ 或 . 开头的文件和文件夹
    if (entry.name.startsWith('_') || entry.name.startsWith('.')) {
      continue;
    }

    if (entry.isFile() && entry.name === 'index.md') {
      continue;
    } else if (entry.isDirectory()) {
      // 获取文件夹标题并递归
      let folderTitle = await getTitle(`/${entryRelativePath}/`, entryPath);
      const nestedItems = await traverseDirectory(entryPath, entryRelativePath);
      const folderIndexPath = path.join(entryPath, 'index.md');
      let folderLink = '';
      if (await fs.access(folderIndexPath).then(() => true).catch(() => false)) {
        // 如果 index.md 存在，从中提取标题
        folderLink = `/${entryRelativePath.replace(/\\/g, '/')}/`;
      }
      items.push({
        text: folderTitle,
        items: nestedItems,
        collapsed: true,
        link: folderLink,
      });
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      // 处理其他 Markdown 文件
      const fileRelativePath = `/${entryRelativePath.replace(/\\/g, '/').replace('.md', '')}`;
      const fileTitle = await getTitle(fileRelativePath, entryPath, true);
      const link = `/${entryRelativePath.replace(/\\/g, '/').replace('.md', '')}`;
      items.push({ text: fileTitle, link });
    }
  }

  return items;
}

/**
 * 生成配置对象
 * @param {string} baseDir - 基础文件夹路径
 * @returns {Promise<Object>} - 生成的配置对象
 */
async function generateConfigObject(baseDir) {
  const config = {};

  const topLevelDirs = await fs.readdir(baseDir, { withFileTypes: true });
  for (const dir of topLevelDirs) {
    if (dir.isDirectory() && !dir.name.startsWith('_') && !dir.name.startsWith('.')) {
      const folderPath = path.join(baseDir, dir.name);
      const folderRelativePath = `/${dir.name}/`;
      const items = await traverseDirectory(folderPath, dir.name);
      config[folderRelativePath] = items
    }
  }

  return config;
}

// 写入 JSON 文件的函数
async function writeJsonToFile(filePath: string, jsonData: object): Promise<void>  {
  await fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), "utf-8");
  console.log(`JSON data has been written to ${filePath}`);
};

// 示例使用
async function main() {
  const baseDir = path.resolve('./docs'); // Adjust the path as needed
  try {
    const config = await generateConfigObject(baseDir);
    console.log('Generated Config:', JSON.stringify(config, null, 2));
    const outputFilePath = path.join(__dirname, "../contants/siderbar.json");
    await writeJsonToFile(outputFilePath, config)
    console.log('Generated Config Write End');
  } catch (error) {
    console.error('Error generating config:', error);
  }
}

main();
