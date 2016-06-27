# hexo-toc

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/bubkoo/hexo-toc/blob/master/LICENSE)
[![npm:](https://img.shields.io/npm/v/hexo-toc.svg?style=flat-square)](https://www.npmjs.com/packages/hexo-toc)


> Insert a markdown TOC(Table Of Content) before posts be rendered. 

Unlike the native [`toc`](http://hexo.io/docs/helpers.html#toc) helper, this plugin will inject a TOC only when a placeholder(`<!-- toc -->`) found in the raw markdown files. And the TOC will be injected after the placeholder. 

All you need to do is placing a placeholder(`<!-- toc -->`) in your post when and where needed. 

**Note:** this plugin will not mangle your posts(markdown files), so you can use it bold.


## Install

```node
npm install hexo-toc --save
```

## Options

All the options of [markdown-toc](https://github.com/jonschlinkert/markdown-toc), 
can be specified as follow in you `_config.yml`:

```yaml
toc:
  maxdepth: 3
```

- maxdepth: Use headings whose depth is at most maxdepth.


## Known issues

### [#8](https://github.com/bubkoo/hexo-toc/issues/8)

Working with [hexo-renderer-markdown-it](https://github.com/celsomiranda/hexo-renderer-markdown-it). 

```yaml
# Markdown-it config
## Docs: https://github.com/celsomiranda/hexo-renderer-markdown-it/wiki
markdown:
  render:
    html: true
```

## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/bubkoo/hexo-toc/issues/new).
