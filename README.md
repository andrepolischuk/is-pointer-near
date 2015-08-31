# is-pointer-near [![Build Status][travis-image]][travis-url]

> Check if pointer is near the element

## Install

```sh
npm install --save is-pointer-near
```

## Usage

```js
var isPointerNear = require('is-pointer-near');
var el = document.querySelector('.hello');

document.addEventListener('mousemove', function(event) {
  isPointerNear(el, event, 25); // true if pointer near the el
}, false);
```

## API

### isPointerNear(element, event[, distance])

Return true if pointer is within `distance` from `element`

## Related

* [is-pointer-inside][is-pointer-inside] - Check if pointer is inside the element

## License

MIT

[travis-url]: https://travis-ci.org/andrepolischuk/is-pointer-near
[travis-image]: https://travis-ci.org/andrepolischuk/is-pointer-near.svg?branch=master

[is-pointer-inside]: https://github.com/andrepolischuk/is-pointer-inside
