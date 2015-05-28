var assign = require('object-assign');
var filter = require('./lib/filter');

hexo.config.toc = assign({}, hexo.config.toc);

hexo.extend.filter.register('before_post_render', filter.insert);
hexo.extend.filter.register('after_post_render', filter.heading);