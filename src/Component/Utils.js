export function dateCompare(d1, d2) {
  console.log(d1.localeCompare(d2));
  if (d1.localeCompare(d2) == -1) {
    return 0;
  } else {
    return 1;
  }
}

export function checkUpcoming(ride) {
  var date1 = ride["date"].split(" ")[0];
  var date2 = "03/03/2022";
  return dateCompare(date1, date2);
}

export function checkPast(ride) {
  var date1 = ride["date"].split(" ")[0];
  var date2 = "03/03/2022";
  return !dateCompare(date1, date2);
}
