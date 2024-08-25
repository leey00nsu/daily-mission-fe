export function formatDate(date: Date | string) {
  return new Intl.DateTimeFormat('ko', { dateStyle: 'full' }).format(
    new Date(date),
  );
}
