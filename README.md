# is-blob-url

> Check if the given value is a [Blob URL](https://www.w3.org/TR/FileAPI/#DefinitionOfScheme).

## Main

```txt
dist/
├── is-blob-url.js        (UMD)
├── is-blob-url.min.js    (UMD, compressed)
├── is-blob-url.common.js (CommonJS, default)
└── is-blob-url.esm.js    (ES Module)
```

## Install

```sh
npm install --save is-blob-url
```

## Usage

```js
import isBlobURL from 'is-blob-url';

isBlobURL('blob:https://example.org/9115d58c-bcda-ff47-86e5-083e9a215304');
// => true

isBlobURL('blob:foo');
// => false
```

## License

[MIT](http://opensource.org/licenses/MIT) © [Chen Fengyuan](http://chenfengyuan.com)
