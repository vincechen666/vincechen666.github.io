// 为每个分类生成对应的分类页面，使用 themes/photo-blog/layout/category.ejs
hexo.extend.generator.register('photo-blog-category-pages', function (locals) {
  const config = this.config || {};
  let categoryDir = config.category_dir || 'categories';

  if (categoryDir[categoryDir.length - 1] !== '/') {
    categoryDir += '/';
  }

  const pages = [];

  locals.categories.forEach(function (category) {
    // 没有文章的分类不生成页面
    if (!category.length) return;

    // Hexo 的 Category 模型自带 path，例如 "categories/book/"
    const categoryPath = category.path || (categoryDir + category.slug + '/');

    pages.push({
      path: categoryPath,
      layout: ['category', 'archive', 'index'],
      data: {
        // category.ejs 里使用 page.category 和 page.posts
        category: category.name,
        posts: category.posts.sort('-date'),

        // 一些常见分页 / 路径字段，方便模板或辅助函数使用
        base: categoryDir,
        total: 1,
        current: 1,
        current_url: categoryPath,
        prev: 0,
        prev_link: '',
        next: 0,
        next_link: ''
      }
    });
  });

  return pages;
});
