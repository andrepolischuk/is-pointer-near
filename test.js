import test from 'ava';
import isPointerNear from './index.es5';

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

test('should return true if near the parent', t => {
  const pointer = {pageX: 25, pageY: 25};
  t.true(isPointerNear(parent, pointer));
  t.false(isPointerNear(children, pointer));
});

test('should return true if near the children', t => {
  const pointer = {pageX: 225, pageY: 225};
  t.false(isPointerNear(parent, pointer));
  t.true(isPointerNear(children, pointer));
});

test('should return true if near the both', t => {
  const pointer = {pageX: 175, pageY: 75};
  t.true(isPointerNear(parent, pointer));
  t.true(isPointerNear(children, pointer));
});

test('should return false if not near', t => {
  const pointer = {pageX: 225, pageY: 25};
  t.false(isPointerNear(parent, pointer));
  t.false(isPointerNear(children, pointer));
});

test('should return false if inside', t => {
  const pointer = {pageX: 125, pageY: 125};
  t.false(isPointerNear(parent, pointer));
  t.false(isPointerNear(children, pointer));
});
