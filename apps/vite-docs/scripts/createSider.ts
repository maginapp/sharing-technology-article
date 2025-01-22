import fs from 'fs/promises';
import path from 'path';
import { DefaultTheme } from 'vitepress';
import { path2title } from '../contants/scripts';

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
 * 获取文件夹或文件的标题
 * @param {string} relativePath - 相对路径
 * @param {string} folderPath - 文件夹路径
 * @returns {Promise<string>} - 提取的标题
 */
async function getTitle(relativePath, folderPath) {
  // 优先从 path2title 中读取
  if (path2title[relativePath]) {
    return path2title[relativePath];
  }

  // 尝试从文件夹的 index.md 中提取标题
  const indexPath = path.join(folderPath, 'index.md');
  try {
    const title = await extractTitleFromMarkdown(indexPath);
    if (title) return title;
  } catch {
    // index.md 不存在或读取失败时继续
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
  const items: DefaultTheme.Sidebar = [];
  const entries = await fs.readdir(currentPath, { withFileTypes: true });

  for (const entry of entries) {
    const entryPath = path.join(currentPath, entry.name);
    const entryRelativePath = path.join(relativePath, entry.name);

    // 跳过以 _ 或 . 开头的文件和文件夹
    if (entry.name.startsWith('_') || entry.name.startsWith('.')) {
      continue;
    }

    if (entry.isDirectory()) {
      // 获取文件夹标题
      const folderTitle = await getTitle(`/${entryRelativePath}/`, entryPath);
      const nestedItems = await traverseDirectory(entryPath, entryRelativePath);
      items.push({
        text: folderTitle || entry.name.charAt(0).toUpperCase() + entry.name.slice(1),
        items: nestedItems,
      });
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      // 获取文件标题
      const title = await extractTitleFromMarkdown(entryPath) || entry.name.replace('.md', '');
      const link = `/${relativePath.replace(/\\/g, '/')}/${entry.name.replace('.md', '')}`;
      items.push({ text: title, link });
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
      const folderTitle = await getTitle(`/${dir.name}/`, folderPath); // 文件夹标题
      const folderItems = await traverseDirectory(folderPath, dir.name);
      config[`/${dir.name}/`] = folderItems.length > 0
        ? [
            {
              text: folderTitle || dir.name.charAt(0).toUpperCase() + dir.name.slice(1),
              items: folderItems,
            },
          ]
        : [];
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
