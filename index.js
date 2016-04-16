/* globals hexo: true */

var assign  = require('object-assign');
var filter  = require('./lib/filter');
var slugify = require('uslug');


hexo.config.toc = assign({
  slugify: function (str, opts) {
    return slugify(str, opts);
  }
}, hexo.config.toc);


hexo.extend.filter.register('before_post_render', filter.insert);
hexo.extend.filter.register('after_post_render', filter.heading);
