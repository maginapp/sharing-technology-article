#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

npm install -g pnpm

# 生成静态文件
pnpm run docs:build

# 进入生成的文件夹
cd apps/vite-docs/docs/.vitepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:maginapp/sharing-technology-article.git master:gh-pages

cd -