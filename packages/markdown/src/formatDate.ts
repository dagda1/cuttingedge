export function formatDate(isoDateString: string): string {
  const date = new Date(isoDateString);

  const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' } as const;

  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

  return formattedDate;
}
