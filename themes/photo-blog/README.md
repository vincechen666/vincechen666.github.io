# Photo Blog Theme for Hexo

一个极简风格的摄影博客主题。

## 安装

1. 将主题复制到 `themes/photo-blog` 目录
2. 在博客根目录的 `_config.yml` 中设置：
   ```yaml
   theme: photo-blog
   ```

## 重要配置

### 分类页面配置

为了确保分类页面正常显示，请在博客根目录的 `_config.yml` 中添加以下配置：

```yaml
# 分类目录
category_dir: categories

# 永久链接格式（可选）
permalink: :year/:month/:day/:title/
```

### 确保 Hexo 使用正确的分类模板

如果你的分类页面无法显示（显示 404 或默认布局），请检查：

1. **确认文章有正确的分类 front-matter**：
   ```markdown
   ---
   title: 文章标题
   date: 2024-01-01
   categories:
     - article
   ---
   ```

2. **重新生成静态文件**：
   ```bash
   hexo clean
   hexo generate
   ```

3. **清除浏览器缓存**

## 特性

- 响应式设计
- 优雅的照片展示
- 分类和标签支持
- 关于页面
- 联系表单
- 深色/浅色主题区域

## 页面

- 首页：`/`
- 归档：`/archives`
- 分类索引：`/categories`
- 单个分类：`/categories/分类名`（如：`/categories/article`）
- 标签索引：`/tags`
- 关于：`/about`
- 联系：`/contact`

## 配置

主题配置文件位于 `themes/photo-blog/_config.yml`

### Hero Section

首页的大标题区域设置。

### Categories

配置文章分类和作品集分类。

### Contact

联系表单和社交媒体信息。

## 自定义

### 修改样式

编辑 `source/css/style.css`

### 添加脚本

在 `source/js/` 目录下添加 JavaScript 文件

## 故障排除

### 分类页面 404

如果分类页面显示 404：

1. 确保文章的 front-matter 中有 `categories` 字段
2. 运行 `hexo clean && hexo generate`
3. 检查 `themes/photo-blog/layout/category.ejs` 是否存在
4. 确保分类名称正确（区分大小写）

### 分类页面使用默认布局

如果分类页面没有使用主题的布局：

1. 确保 `themes/photo-blog/layout/category.ejs` 存在
2. 确保 `themes/photo-blog/layout/tag.ejs` 存在
3. 清理缓存：`hexo clean`
4. 重新生成：`hexo generate`

### 在不同项目中使用主题

当将主题移植到其他 Hexo 项目时：

1. 复制整个 `photo-blog` 文件夹到新项目的 `themes/` 目录
2. 更新新项目根目录的 `_config.yml`：
   ```yaml
   theme: photo-blog
   ```
3. 根据需要更新主题配置：`themes/photo-blog/_config.yml`
4. 运行：
   ```bash
   hexo clean
   hexo generate
   ```

## 主题结构

```
photo-blog/
├── layout/           # 模板文件
│   ├── index.ejs     # 首页
│   ├── post.ejs      # 文章页
│   ├── page.ejs      # 通用页面
│   ├── category.ejs  # 分类页
│   ├── tag.ejs       # 标签页
│   ├── archive.ejs   # 归档页
│   ├── about.ejs     # 关于页
│   └── contact.ejs   # 联系页
├── source/           # 静态资源
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── main.js
├── scripts/          # 辅助脚本
│   ├── index-pages.js
│   ├── category-pages.js
│   └── tag-index.js
└── _config.yml      # 主题配置
```

## License

MIT
