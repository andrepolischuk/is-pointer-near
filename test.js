
import isPointerNear from './index';
import assert from 'assert';

const parent = {
  offsetLeft: 50,
  offsetTop: 50,
  offsetWidth: 100,
  offsetHeight: 100,
  offsetParent: null
};

const children = {
  offsetLeft: 50,
  offsetTop: 50,
  offsetWidth: 100,
  offsetHeight: 100,
  offsetParent: parent
};

describe('isPointerNear(el, event)', () => {
  it('should return true if near the parent', () => {
    const pointer = {pageX: 25, pageY: 25};
    assert(isPointerNear(parent, pointer) === true);
    assert(isPointerNear(children, pointer) === false);
  });

  it('should return true if near the children', () => {
    const pointer = {pageX: 225, pageY: 225};
    assert(isPointerNear(parent, pointer) === false);
    assert(isPointerNear(children, pointer) === true);
  });

  it('should return true if near the both', () => {
    const pointer = {pageX: 175, pageY: 75};
    assert(isPointerNear(parent, pointer) === true);
    assert(isPointerNear(children, pointer) === true);
  });

  it('should return false if not near', () => {
    const pointer = {pageX: 225, pageY: 25};
    assert(isPointerNear(parent, pointer) === false);
    assert(isPointerNear(children, pointer) === false);
  });

  it('should return false if inside', () => {
    const pointer = {pageX: 125, pageY: 125};
    assert(isPointerNear(parent, pointer) === false);
    assert(isPointerNear(children, pointer) === false);
  });
});
