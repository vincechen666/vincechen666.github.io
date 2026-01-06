// 生成分类和标签的索引页面
hexo.extend.generator.register('category-index', function(locals) {
  let categoryDir = this.config.category_dir || 'categories';
  if (categoryDir[categoryDir.length - 1] !== '/') {
    categoryDir += '/';
  }

  return {
    path: categoryDir,
    layout: ['category-index', 'category', 'archive', 'index'],
    data: {
      base: categoryDir,
      total: 1,
      current: 1,
      current_url: categoryDir,
      prev: 0,
      prev_link: '',
      next: 0,
      next_link: '',
      categories: locals.categories
    }
  };
});

hexo.extend.generator.register('tag-index', function(locals) {
  let tagDir = this.config.tag_dir || 'tags';
  if (tagDir[tagDir.length - 1] !== '/') {
    tagDir += '/';
  }

  return {
    path: tagDir,
    layout: ['tag-index', 'tag', 'archive', 'index'],
    data: {
      base: tagDir,
      total: 1,
      current: 1,
      current_url: tagDir,
      prev: 0,
      prev_link: '',
      next: 0,
      next_link: '',
      tags: locals.tags
    }
  };
});
