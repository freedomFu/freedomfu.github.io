# 部署到 GitHub Pages

本项目是 Hugo 静态站点，可以直接部署到 GitHub Pages，不依赖 Cloudflare、
EdgeOne 或任何服务端运行环境。

## 首次部署

1. 在 GitHub 新建公开仓库 `freedomfu.github.io`，不要预先添加 README、许可证或
   `.gitignore`。
2. 将本地仓库的远程地址改为新仓库并推送：

   ```bash
   git remote set-url origin https://github.com/freedomfu/freedomfu.github.io.git
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push -u origin main
   ```

3. 打开仓库的 **Settings → Pages**，将 **Source** 设置为 **GitHub Actions**。
4. 打开 **Actions**，等待 `Deploy Hugo site to GitHub Pages` 完成。
5. 访问 <https://freedomfu.github.io/>。

以后每次推送到 `main` 分支都会自动重新构建和发布。也可以在 Actions 页面手动
运行工作流。

## 本地预览

项目要求 Node.js 24：

```bash
npm ci
npm run dev
```

生产构建：

```bash
npm run build -- --gc --minify --baseURL "https://freedomfu.github.io/"
```

生成结果位于 `public/`，不应提交到 Git。

## 自定义域名

在 GitHub 仓库的 **Settings → Pages → Custom domain** 中填写域名，并按 GitHub
提示设置 DNS。工作流会读取 Pages 提供的站点地址，因此不需要手工修改构建命令。

## 内容与许可证

原仓库内容采用 CC BY-NC-SA 4.0。公开部署原作者文章、照片和个人资料前，请确认
署名、非商业使用和相同方式共享等要求；更适合作为站点代码参考，并将 `content/`、
个人图片、统计 ID、备案信息、赞赏码和评论配置替换为自己的内容。

评论和赞赏功能目前在 `hugo.toml` 中默认关闭。替换 Giscus 仓库信息和收款图片后，
可分别将 `enableComments`、`enableDonate` 改为 `true`。
