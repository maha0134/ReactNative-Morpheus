export function getDate() {
  let date = new Date(Date.now());
  const time = date.getHours();
  date = date.toLocaleString("en-CA").split(time)[0];
  return date;
}
