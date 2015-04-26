var toc = require('markdown-toc');
var assign = require('object-assign');

module.exports = function (data) {
    var options = assign({}, this.config.toc);
    data.content = toc.insert(data.content, options);
    return data;
};