#!/bin/bash

# Photo Blog Theme - 依赖安装脚本
# 自动安装主题所需的所有 Hexo 插件

echo "==================================="
echo "Photo Blog Theme 依赖安装"
echo "==================================="
echo ""

# 检查是否在 Hexo 博客根目录
if [ ! -f "_config.yml" ]; then
    echo "❌ 错误：请在 Hexo 博客根目录运行此脚本"
    echo "   应该能看到 _config.yml 文件"
    exit 1
fi

echo "✅ 确认在 Hexo 博客根目录"
echo ""

# 安装渲染器
echo "📦 安装 EJS 渲染器..."
npm install hexo-renderer-ejs --save
echo ""

# 安装生成器
echo "📦 安装页面生成器..."
npm install hexo-generator-archive --save
npm install hexo-generator-category --save
npm install hexo-generator-tag --save
npm install hexo-generator-index --save
echo ""

# 安装其他有用的插件
echo "📦 安装其他推荐插件..."
echo "   - RSS 订阅生成器"
npm install hexo-generator-feed --save

echo "   - 站点地图生成器"
npm install hexo-generator-sitemap --save

echo "   - 搜索功能"
npm install hexo-generator-searchdb --save
echo ""

# 安装部署工具（可选）
read -p "是否安装部署工具 (Git)? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "📦 安装部署工具..."
    npm install hexo-deployer-git --save
    echo ""
fi

echo "==================================="
echo "✅ 安装完成！"
echo "==================================="
echo ""
echo "接下来的步骤："
echo "1. 配置主题：编辑 _config.yml，将 theme 设置为 photo-blog"
echo "2. 复制主题配置（如果需要）："
echo "   cp themes/photo-blog/_config.yml.example themes/photo-blog/_config.yml"
echo "3. 创建测试文章："
echo "   hexo new post test-post"
echo "4. 生成并运行："
echo "   hexo clean && hexo generate && hexo server"
echo ""
echo "访问 http://localhost:4000 查看效果"
echo ""
