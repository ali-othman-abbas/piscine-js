function firstDayWeek(num: number, str: string) {
  if (num === 1) {
    return `01-01-${str}`;
  }
  const dayTime = 24 * 60 * 60 * 1000
  
  const date = new Date(`${str}-01-01`);
  date.setTime(date.getTime() - date.getDay() * dayTime + dayTime)

  num = num - 1;
  const result = new Date(date.getTime() + num * 7 * dayTime);
  const day = String(result.getUTCDate()).padStart(2, "0");
  const month = String(result.getUTCMonth() + 1).padStart(2, "0");
  const year = String(result.getUTCFullYear()).padStart(4, "0");

  return `${day}-${month}-${year}`;
}
