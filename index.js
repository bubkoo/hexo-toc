/* globals hexo: true */

var assign = require('object-assign');
var filter = require('./lib/filter');
var slugify = require('./lib/slugify');

hexo.config.toc = assign({}, hexo.config.toc, { slugify: slugify.load(hexo.config.toc.slugify) });

hexo.extend.filter.register('before_post_render', filter.insert);
hexo.extend.filter.register('after_post_render', filter.heading);
