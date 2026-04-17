function firstDayWeek(num, str) {
  if (num === 1) {
    return `01-01-${str}`;
  }
  const milliInDay = 24 * 60 * 60 * 1000;

  const epochMonday = new Date(0);
  epochMonday.setTime(epochMonday.getTime() - 3 * milliInDay);

  const startOfYear = new Date(0);
  startOfYear.setUTCFullYear(Number(str));

  const diff = Math.abs(epochMonday.getTime() - startOfYear.getTime());

  const daysDiff = Math.trunc(diff / milliInDay);
  const rem = daysDiff % 7;
  // + (daysDiff - rem) * milliInDay
  const StartOfYearMonday = new Date(epochMonday.getTime());

  if (epochMonday.getTime() > startOfYear.getTime()) {
    StartOfYearMonday.setTime(
      StartOfYearMonday.getTime() - (daysDiff - rem + 7) * milliInDay,
    );
    if (rem === 0) {
      StartOfYearMonday.setTime(StartOfYearMonday.getTime() + 7 * milliInDay);
    }
  } else {
    StartOfYearMonday.setTime(
      StartOfYearMonday.getTime() + (daysDiff - rem) * milliInDay,
    );
  }

  num = num - 1;
  const result = new Date(StartOfYearMonday.getTime() + num * 7 * milliInDay);
  const day = String(result.getUTCDate()).padStart(2, "0");
  const month = String(result.getUTCMonth() + 1).padStart(2, "0");
  const year = String(result.getUTCFullYear()).padStart(4, "0");

  return `${day}-${month}-${year}`;
}
