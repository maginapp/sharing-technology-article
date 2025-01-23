import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';

// 加载环境变量
dotenv.config();

const app = express();
const port = process.env.PORT || 3000; // 从 .env 文件中加载端口，默认为 3000

// 构建后的 VitePress 输出目录
const distPath = path.join(__dirname, '../docs/.vitepress/dist');

// 提供静态文件服务
app.use(express.static(distPath));

// 捕获所有未匹配的路由并返回 index.html (为了支持 SPA 模式的路由)
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// 启动服务
app.listen(port, () => {
  console.log(`VitePress app is running at http://localhost:${port}`);
});
