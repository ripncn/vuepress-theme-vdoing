#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e
npm run build # 生成静态文件
cd docs/.vuepress/dist # 进入生成的文件夹

# deploy to github
echo 'doc.lovou.pw' > CNAME
if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:ripncn/vuepress-theme-vdoing.git
else
  msg='来自github action的自动部署'
  githubUrl=https://ripncn:${GITHUB_TOKEN}@github.com/ripncn/vuepress-theme-vdoing.git
  git config --global user.name "ripncn"
  git config --global user.email "ripncn@163.com"
fi
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages # 推送到github

cd -
rm -rf $dist_path
