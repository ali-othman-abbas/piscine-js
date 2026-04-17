const days = [0, 1, -1, 0, 0, 1, 1, 2, 3, 3, 4, 4, 5];
function dayOfTheYear(date: Date) {
  let daysNum = date.getUTCDate();
  const previousMonths = date.getUTCMonth();
  daysNum = daysNum + 30 * previousMonths + days[previousMonths]!;
  if (date.getUTCFullYear() % 4 === 0) {
    daysNum++;
  }

  return daysNum;
}
