/* eslint-disable @typescript-eslint/no-unused-vars */
const f = (i: number): void => console.log(i);

// $ExpectType void
f(1);

// Can also write the assertion on the same line.
f(2); // $ExpectType void

// $ExpectError
f('one');
