var toc = require('markdown-toc');
var cheerio = require('cheerio');
var assign = require('object-assign');

exports.insert = function (data) {

    var options = assign({}, this.config.toc);

    data.content = toc.insert(data.content, options);
    return data;
};

exports.heading = function (data) {

    var options = assign({}, this.config.toc);

    var $ = cheerio.load(data.content);
    var headings = $('h1, h2, h3, h4, h5, h6');

    headings.each(function () {
        var $title = $(this);
        var title = $title.text();
        var id = toc.slugify(title, options);
        $title.attr('id', id);
    });

    data.content = $.html();

    return data;
};