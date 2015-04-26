# hexo-toc

Insert a markdown TOC(Table Of Content) before posts be rendered. 

Unlike the native [`toc`](http://hexo.io/docs/helpers.html#toc) helper, this plugin will inject a TOC only when a placeholder(`<!-- toc -->`) found in the raw markdown files. And the TOC will be injected after the placeholder. 

All you need to do is placing a placeholder(`<!-- toc -->`) in your post when and where needed. 

**Note:** this plugin will not mangle your posts(markdown files), so you can use it bold.

## Installation

```node
npm install hexo-toc --save
```

## Options

All the options of [markdown-toc](https://github.com/jonschlinkert/markdown-toc), 
can be specified as follow in you `_config.yml`:

```yaml
toc:
  maxDepth: 3
```

- maxDepth: Use headings whose depth is at most maxDepth.
