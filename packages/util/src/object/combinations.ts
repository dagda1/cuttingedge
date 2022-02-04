export function* combinations<A>(arr: A[]): Generator<Array<A>, void, void> {
  if (arr.length === 1) {
    yield arr;

    return;
  }

  yield [arr[0]];

  for (const c of combinations(arr.slice(1))) {
    yield c;

    yield [arr[0], ...c];
  }
}
