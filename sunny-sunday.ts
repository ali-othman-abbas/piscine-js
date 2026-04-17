const days = [0, 1, -1, 0, 0, 1, 1, 2, 3, 3, 4, 4, 5];
function daysSinceStartOfYear(date: Date) {
  let daysNum = date.getUTCDate();
  const previousMonths = date.getUTCMonth();
  daysNum = daysNum + 30 * previousMonths + days[previousMonths]!;
  if (date.getMonth() > 1 && date.getUTCFullYear() % 4 === 0) {
    daysNum++;
  }

  return daysNum;
}

function countLeapYearsBeforeCurrentYear(date: Date) {
  date.setUTCFullYear(
    date.getUTCFullYear() % 4 !== 0 && date.getUTCFullYear() !== 0
      ? date.getUTCFullYear()
      : date.getUTCFullYear() - 1,
  );
  const divisibleBy4 = Math.trunc(date.getUTCFullYear() / 4);
  const divisibleBy100 = Math.trunc(date.getUTCFullYear() / 100);
  const divisibleBy400 = Math.trunc(date.getUTCFullYear() / 400);

  return divisibleBy4 - divisibleBy100 + divisibleBy400;
}

function sunnySunday(date: Date) {
  let daysNum = (date.getUTCFullYear() - 1) * 365;
  daysNum = daysNum + daysSinceStartOfYear(date);
  daysNum = daysNum + countLeapYearsBeforeCurrentYear(date)
  
  const weekDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  return weekDay[(daysNum - 1) % 6];
}
