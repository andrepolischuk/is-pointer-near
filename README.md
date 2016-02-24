# is-pointer-near [![Build Status][travis-image]][travis-url]

> Check if pointer is near the element

## Install

```sh
npm install --save is-pointer-near
```

## Usage

```js
import isPointerNear from 'is-pointer-near';

document.addEventListener('mousemove', event => {
  const el = document.querySelector('.hello');
  isPointerNear(el, event, 25); // true if pointer near the el
}, false);
```

## API

### isPointerNear(element, event[, distance])

Return `true` if pointer is within `distance` from `element`

#### element

Type: `element`

DOM element.

#### event

Type: `object`

Pointer event.

#### distance

Type: `number`  
Default: `50`

Distance to the `element`.

## Related

* [coordinates][coordinates] — calculate relative coordinates
* [global-offset][global-offset] — element global offset
* [is-pointer-inside][is-pointer-inside] — check if pointer is inside the element

## License

MIT

[travis-url]: https://travis-ci.org/andrepolischuk/is-pointer-near
[travis-image]: https://travis-ci.org/andrepolischuk/is-pointer-near.svg?branch=master

[coordinates]: https://github.com/andrepolischuk/coordinates
[global-offset]: https://github.com/andrepolischuk/global-offset
[is-pointer-inside]: https://github.com/andrepolischuk/is-pointer-inside
