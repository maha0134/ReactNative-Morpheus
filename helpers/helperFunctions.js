export function getDate() {
  // let date = new Date(Date.now());
  let date = new Date("12/13/2022");
  const time = date.getHours();
  date = date.toLocaleString("en-CA").split(time)[0];
  return date;
}
