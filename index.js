
/**
 * Module dependencies
 */

import isPointerInside from 'is-pointer-inside';
import offset from 'global-offset';

/**
 * Expose detection
 *
 * @param {Element} el
 * @param {Object} event
 * @param {Number} dist
 * @return {Boolean}
 * @api public
 */

export default (el, {pageX, pageY}, dist = 50) => {
  const {left, top} = offset(el);
  const {offsetWidth, offsetHeight} = el;
  const right = left + offsetWidth;
  const bottom = top + offsetHeight;
  return !isPointerInside(el, {pageX, pageY}) &&
    pageX >= left - dist && pageX <= right + dist &&
    pageY >= top - dist && pageY <= bottom + dist;
};