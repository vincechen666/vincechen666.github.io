# 问题排查：/categories 和 /archives 页面显示空白

## 问题描述

访问 `/categories` 和 `/archives` 页面时显示 "Cannot GET" 或空白页。

## 原因

Hexo 默认不自动生成归档和分类页面，需要安装相应的生成器插件。

## 解决方案

### 方案 1：安装必要的生成器插件（推荐）

在您的 Hexo 博客根目录执行：

```bash
# 安装归档生成器
npm install hexo-generator-archive --save

# 安装分类生成器
npm install hexo-generator-category --save

# 安装标签生成器（可选，如果需要标签页）
npm install hexo-generator-tag --save

# 清除缓存并重新生成
hexo clean
hexo generate
hexo server
```

### 方案 2：手动创建页面

如果不想安装插件，可以手动创建页面：

#### 1. 创建归档页面

```bash
hexo new page archives
```

编辑 `source/archives/index.md`：

```yaml
---
title: 归档
layout: archives
type: archives
comments: false
---
```

#### 2. 创建分类页面

```bash
hexo new page categories
```

编辑 `source/categories/index.md`：

```yaml
---
title: 分类
layout: category
type: categories
comments: false
---
```

#### 3. 创建标签页面（可选）

```bash
hexo new page tags
```

编辑 `source/tags/index.md`：

```yaml
---
title: 标签
layout: tag
type: tags
comments: false
---
```

### 方案 3：使用主题提供的生成器

1. 确保 `themes/photo-blog/scripts/generators.js` 存在
2. 重新生成站点：

```bash
hexo clean
hexo generate
hexo server
```

## 配置文件检查

### 1. 检查根目录 _config.yml

确保菜单配置正确：

```yaml
# URL
## If your site is put in a subdirectory, set url as 'http://yoursite.com/child' and root as '/child/'
url: http://yoursite.com
root: /
permalink: :year/:month/:day/:title/
permalink_defaults:

# Directory
source_dir: source
public_dir: public
tag_dir: tags
archive_dir: archives
category_dir: categories
```

### 2. 检查主题配置文件

确保菜单链接正确：

```yaml
# themes/photo-blog/_config.yml
menu:
  Home: /
  Archives: /archives
  Categories: /categories
  Tags: /tags
  About: /about
```

## 验证步骤

### 1. 检查插件是否安装

```bash
npm list hexo-generator-archive
npm list hexo-generator-category
```

如果没有安装，会显示 `UNMET DEPENDENCY`。

### 2. 检查生成的文件

运行 `hexo generate` 后，检查以下文件是否存在：

```
public/archives/index.html
public/categories/index.html
```

### 3. 检查模板文件

确保主题中有以下模板文件：

```
themes/photo-blog/layout/archive.ejs
themes/photo-blog/layout/category.ejs
```

### 4. 查看日志

如果还有问题，运行时添加调试信息：

```bash
hexo generate --debug
```

## 常见错误

### 错误 1: Cannot GET /categories

**原因**：没有生成 categories 页面

**解决**：安装 hexo-generator-category 或手动创建页面

### 错误 2: 页面空白但 URL 正确

**原因**：模板文件路径错误或数据为空

**解决**：
1. 检查是否有文章包含分类/标签
2. 确保文章 Front Matter 中有正确的 category 或 categories 字段

### 错误 3: 样式加载失败

**原因**：静态文件路径错误

**解决**：
```bash
hexo clean
hexo generate
```

## 完整安装命令

为了确保所有功能正常，执行以下命令：

```bash
# 1. 安装必要的渲染器
npm install hexo-renderer-ejs --save

# 2. 安装生成器
npm install hexo-generator-archive --save
npm install hexo-generator-category --save
npm install hexo-generator-tag --save
npm install hexo-generator-index --save

# 3. 安装其他有用的插件（可选）
npm install hexo-generator-feed --save
npm install hexo-generator-sitemap --save
npm install hexo-generator-searchdb --save

# 4. 清除并重新生成
hexo clean
hexo generate

# 5. 启动服务器
hexo server
```

## 测试数据

如果页面还是空白，创建一些测试文章：

```bash
# 创建测试文章 1
hexo new post test-post-1
```

编辑 `source/_posts/test-post-1.md`：

```yaml
---
title: 测试文章 1
date: 2024-01-15 14:30:00
categories:
  - 测试分类
tags:
  - 测试
  - 标签
---

这是测试文章的内容。
```

```bash
# 创建测试文章 2
hexo new post test-post-2
```

编辑 `source/_posts/test-post-2.md`：

```yaml
---
title: 测试文章 2
date: 2024-01-16 14:30:00
categories:
  - 另一个分类
tags:
  - 测试2
---

这是另一篇测试文章的内容。
```

重新生成：

```bash
hexo clean
hexo generate
hexo server
```

## 仍然有问题？

如果按照以上步骤操作后仍然有问题：

1. 检查 Hexo 版本：
   ```bash
   hexo version
   ```
   建议使用 Hexo 5.0 或更高版本

2. 删除 `node_modules` 并重新安装：
   ```bash
   rm -rf node_modules
   npm install
   ```

3. 删除 `.deploy_git` 文件夹（如果存在）并重新部署

4. 查看 GitHub Issues 或 Hexo 论坛

## 联系支持

如果问题依然存在，请提供以下信息：

1. Hexo 版本 (`hexo version`)
2. 已安装的插件列表 (`npm list --depth=0`)
3. 完整的错误信息
4. `_config.yml` 配置（去掉敏感信息）
