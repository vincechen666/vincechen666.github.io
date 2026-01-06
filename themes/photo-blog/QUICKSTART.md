# Photo Blog Theme - 快速开始指南

## 安装步骤

### 1. 创建 Hexo 博客（如果还没有）

```bash
# 安装 Hexo
npm install -g hexo-cli

# 初始化博客
hexo init my-blog
cd my-blog
npm install
```

### 2. 安装主题

```bash
# 复制主题到 themes 目录
cp -r themes/photo-blog /path/to/your/hexo/blog/themes/
```

或者在 `themes` 目录下克隆（如果有 Git 仓库）：
```bash
cd themes
git clone <repository-url> photo-blog
```

### 3. 配置主题

编辑 Hexo 根目录的 `_config.yml`：

```yaml
# 将主题修改为 photo-blog
theme: photo-blog

# 其他配置
language: zh-CN
timezone: Asia/Shanghai
```

### 4. 安装依赖

```bash
npm install --save hexo-renderer-ejs
```

### 5. 创建示例文章

#### 创建摄影作品文章

创建 `source/_posts/landscape-1.md`：

```yaml
---
title: 山间日出
date: 2024-01-15 14:30:00
category: landscape
photos:
  - https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800
type: photo
---

这是一张在阿尔卑斯山拍摄的日出照片。清晨的第一缕阳光穿过云层，洒在雪山之巅，形成了壮丽的景象。
```

#### 创建普通文章

创建 `source/_posts/photography-zen.md`：

```yaml
---
title: 摄影中的禅意
date: 2024-01-15 15:00:00
categories:
  - 人文思考
tags:
  - 摄影哲学
  - 禅意
thumbnail: https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800
---

摄影不仅是记录，更是一种修行。在每一次按下快门的瞬间，我们都在与世界对话，与自己对话...
```

### 6. 创建页面

#### 关于页面

创建 `source/about/index.md`：

```yaml
---
title: 关于
---

我是一名热爱摄影的独立创作者，同时也是一个技术爱好者。

## 摄影理念

我相信，每一张照片都承载着一个故事，每一次快门的释放都是对生活的礼赞。

## 技能

- 风光摄影
- 人像摄影
- 后期处理
```

#### 联系页面

创建 `source/contact/index.md`：

```yaml
---
title: 联系
---

如果您对我的摄影作品感兴趣，或者想要交流摄影技巧、探讨合作机会，欢迎与我联系。

你可以通过以下方式联系我：

- 邮箱：hello@example.com
- 微信：@your-wechat
```

### 7. 测试运行

```bash
# 清除缓存
hexo clean

# 生成静态文件
hexo generate

# 启动本地服务器
hexo server

# 在浏览器中访问 http://localhost:4000
```

### 8. 部署

```bash
# 安装部署工具（以 GitHub Pages 为例）
npm install --save hexo-deployer-git

# 配置 _config.yml 中的 deploy 部分
deploy:
  type: git
  repo: https://github.com/yourusername/yourusername.github.io.git
  branch: main

# 部署
hexo deploy
```

## 自定义配置

### 修改主题配置

编辑 `themes/photo-blog/_config.yml`：

```yaml
# 修改标题和描述
hero:
  title: 你的标题
  subtitle: 你的副标题

# 修改颜色
style:
  primary_color: '#3B82F6'  # 主色调

# 修改菜单
menu:
  Home: /
  Gallery: /gallery
  Archives: /archives
  About: /about
```

### 添加自己的图片

1. 在 `source/` 目录下创建 `images` 文件夹：
```bash
mkdir source/images
```

2. 将图片放入该文件夹：
```
source/images/
  ├── hero-bg.jpg       # 英雄区背景图
  ├── avatar.jpg        # 头像
  └── gallery/          # 作品集图片
      ├── photo1.jpg
      ├── photo2.jpg
      └── photo3.jpg
```

3. 在配置或文章中引用：
```yaml
hero:
  background_image: /images/hero-bg.jpg

about:
  avatar: /images/avatar.jpg
```

## 文章 Front Matter 说明

### 摄影作品

```yaml
---
title: 作品标题
date: 2024-01-15 14:30:00
category: landscape  # 分类：landscape, portrait, street, macro
photos:
  - /images/gallery/photo1.jpg
  - /images/gallery/photo2.jpg
type: photo
---
```

### 普通文章

```yaml
---
title: 文章标题
date: 2024-01-15 14:30:00
categories:
  - 分类名
tags:
  - 标签1
  - 标签2
thumbnail: /images/thumbnail.jpg
comments: true  # 是否启用评论
---
```

## 常用命令

```bash
# 新建文章
hexo new post "文章标题"

# 新建页面
hexo new page "页面名称"

# 清除缓存
hexo clean

# 生成静态文件
hexo generate

# 启动本地服务器
hexo server

# 部署
hexo deploy

# 组合命令（清除 + 生成 + 部署）
hexo clean && hexo generate && hexo deploy
```

## 问题排查

### 样式没有加载

1. 检查 `themes/photo-blog/source/css/style.css` 是否存在
2. 运行 `hexo clean` 后重新生成

### 图片显示不出来

1. 检查图片路径是否正确
2. 确保图片文件放在 `source/` 目录下
3. 使用绝对路径（以 `/` 开头）

### 布局错乱

1. 确保安装了 `hexo-renderer-ejs`
2. 检查主题版本兼容性

### 找不到页面

1. 确保页面文件在 `source/` 目录下
2. 检查文件命名（使用 `index.md`）
3. 运行 `hexo clean` 后重新生成

## 下一步

- 阅读 [README.md](README.md) 了解更多配置选项
- 查看 [Hexo 文档](https://hexo.io/docs/) 学习更多用法
- 自定义 CSS 样式打造独特风格
- 添加更多功能插件（评论、搜索等）

## 获取帮助

如果遇到问题：

1. 查看 [Hexo 故障排除](https://hexo.io/docs/troubleshooting.html)
2. 在 GitHub 上提 Issue
3. 查看 Hexo 社区论坛

祝你使用愉快！📸
