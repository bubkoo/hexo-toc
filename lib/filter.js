var toc = require('marked-toc');
var assign = require('object-assign');

module.exports = function (data) {
    var options = assign({}, this.config.toc);
    data.content = toc.insert(data.content, options);
    return data;
};