export function getDate() {
  let date = new Date(Date.now());
  const year = date.getFullYear();
  date = date.toUTCString().split(year)[0].trimEnd();
  return date;
}
