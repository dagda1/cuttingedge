export function* range(start: number, end?: number, step = 1): Generator<number, void> {
  let begin: number;
  let finish: number;

  if (!end) {
    begin = 0;
    finish = start;
  } else {
    begin = start;
    finish = end;
  }

  for (let value = begin; value <= finish; value += step) {
    yield value;
  }
}
