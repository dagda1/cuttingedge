export function trimSlashes(path: string): string {
  let start = 0;
  let end = path.length;

  while (path[start] === '/') {
    start += 1;
  }

  while (end > start && path[end - 1] === '/') {
    end -= 1;
  }

  return path.slice(start, end);
}
