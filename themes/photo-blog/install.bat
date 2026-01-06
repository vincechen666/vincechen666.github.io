@echo off
REM Photo Blog Theme - Windows 依赖安装脚本
REM 自动安装主题所需的所有 Hexo 插件

echo ===================================
echo Photo Blog Theme 依赖安装
echo ===================================
echo.

REM 检查是否在 Hexo 博客根目录
if not exist "_config.yml" (
    echo ❌ 错误：请在 Hexo 博客根目录运行此脚本
    echo    应该能看到 _config.yml 文件
    pause
    exit /b 1
)

echo ✅ 确认在 Hexo 博客根目录
echo.

REM 安装渲染器
echo 📦 安装 EJS 渲染器...
call npm install hexo-renderer-ejs --save
echo.

REM 安装生成器
echo 📦 安装页面生成器...
call npm install hexo-generator-archive --save
call npm install hexo-generator-category --save
call npm install hexo-generator-tag --save
call npm install hexo-generator-index --save
echo.

REM 安装其他有用的插件
echo 📦 安装其他推荐插件...
echo    - RSS 订阅生成器
call npm install hexo-generator-feed --save

echo    - 站点地图生成器
call npm install hexo-generator-sitemap --save

echo    - 搜索功能
call npm install hexo-generator-searchdb --save
echo.

REM 安装部署工具（可选）
set /p deploy="是否安装部署工具 (Git)? (y/n): "
if /i "%deploy%"=="y" (
    echo 📦 安装部署工具...
    call npm install hexo-deployer-git --save
    echo.
)

echo ===================================
echo ✅ 安装完成！
echo ===================================
echo.
echo 接下来的步骤：
echo 1. 配置主题：编辑 _config.yml，将 theme 设置为 photo-blog
echo 2. 创建测试文章：
echo    hexo new post test-post
echo 3. 生成并运行：
echo    hexo clean ^&^& hexo generate ^&^& hexo server
echo.
echo 访问 http://localhost:4000 查看效果
echo.
pause
