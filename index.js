var assign = require('object-assign');

hexo.config.toc = assign({}, hexo.config.toc);

hexo.extend.filter.register('before_post_render', require('./lib/filter'));