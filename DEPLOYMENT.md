# GitHub Pages 部署

推送或合并到 `master` 后，`.github/workflows/deploy.yml` 会安装依赖、构建 VitePress、上传 `apps/vite-docs/docs/.vitepress/dist`，再直接部署到 GitHub Pages。构建失败时不会执行部署，不再向 `gh-pages` 推送提交。

## 首次配置

1. 仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。
2. **Settings → Actions → General** 确认 Actions 已启用，并允许工作流使用的 `actions/*` 和 `pnpm/action-setup`。工作流已声明所需权限，无需将仓库默认 Workflow permissions 改为全局读写。
3. 如果 **Settings → Environments → github-pages** 已有限制，允许 `master` 部署。若配置了 Required reviewers，需要在每次部署时批准。
4. 将这些改动提交并推送到 `master`，在 **Actions → Deploy VitePress to GitHub Pages** 查看执行结果。
5. 停用 Travis 中这个仓库的构建；如果分支保护要求 Travis 检查通过，移除旧的必需检查。

无需新增 PAT、SSH 密钥或自定义 Secret。部署使用 GitHub 自动提供的 `GITHUB_TOKEN` 和 OIDC 权限。

## 手动部署

工作流进入默认分支后，可在 **Actions → Deploy VitePress to GitHub Pages → Run workflow** 中选择 `master`。

也可以安装 GitHub CLI、执行 `gh auth login`，然后运行 `sh deploy.sh`。该脚本只触发远端 `master` 的工作流，本地修改须先提交并推送。

## 本地验证

```sh
pnpm install --frozen-lockfile
pnpm run build
pnpm run docs:preview
```

本地默认 base 为 `/sharing-technology-article/`，预览时访问对应子路径。Actions 通过 `configure-pages` 的 `base_path` 输出设置 `DOCS_BASE`，根据实际 Pages 地址构建资源、页面链接和 PWA 注册路径。

当前目标地址为 `https://maginapp.github.io/sharing-technology-article/`。如使用自定义域名，在 **Settings → Pages → Custom domain** 中设置并完成 DNS 配置，然后重新运行工作流。本地模拟域名根路径可执行 `DOCS_BASE=/ pnpm run build`。

根目录历史遗留的 `CNAME`、`_config.yml` 不会随此工作流上传，也不参与 VitePress 构建。旧 VuePress 应用内的 Travis 和部署脚本仅为历史配置，不参与当前自动部署。

侧边栏使用已提交的 `apps/vite-docs/contants/siderbar.js`，构建不会重新生成并覆盖注释。新增文章后需同步维护侧边栏；显式运行生成脚本会覆盖其内容。
