#!/usr/bin/env sh
set -eu

# 手动触发远端 master 的部署，不会发布本地未推送的修改。
if ! command -v gh >/dev/null 2>&1; then
  echo '请安装 GitHub CLI 并执行 gh auth login，或在 GitHub Actions 页面手动运行工作流。' >&2
  exit 1
fi

gh workflow run deploy.yml --repo maginapp/sharing-technology-article --ref master
echo '已请求部署远端 master。可在 GitHub Actions 页面查看进度。'
