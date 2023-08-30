import { assert } from 'assert-ts';

function run() {
  const canvas = document.querySelector('#scene');

  assert(!!canvas, `no element at #scene`);
}

run();
