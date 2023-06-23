export function formatDate(date: string): string {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  } as const;

  const now = new Date(date).toLocaleDateString('en-US', options);

  return now;
}
