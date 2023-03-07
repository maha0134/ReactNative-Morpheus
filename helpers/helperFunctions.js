export function getDate() {
  let date = new Date(Date.now());
  //To check, you can add any date under here.
  // let date = new Date("12/13/2022");
  const time = date.getHours().toString().padStart(2, "0");
  date = date.toLocaleString("en-CA").split(time)[0].trim();
  return date;
}
