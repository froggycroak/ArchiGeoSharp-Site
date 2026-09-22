# ArchiGeoSharp Site

ArchiGeoSharp 的公开介绍站与教程（VitePress + GitHub Pages）。

- 在线文档：https://froggycroak.github.io/ArchiGeoSharp-site/
- NuGet：https://www.nuget.org/packages/ArchiGeoSharp.Basic

## 本地预览

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

静态产物位于 `docs/.vitepress/dist`。

## 发布到 GitHub Pages

本仓库已配置 Actions（`.github/workflows/deploy-pages.yml`）。首次上线：

```bash
# 若尚未登录
gh auth login

# 创建公开仓库并推送（在本目录执行）
git branch -M main
gh repo create ArchiGeoSharp-site --public --source=. --remote=origin --push

# 然后在 GitHub 仓库 Settings → Pages → Source 选择 GitHub Actions
```

上线后访问：https://froggycroak.github.io/ArchiGeoSharp-site/
