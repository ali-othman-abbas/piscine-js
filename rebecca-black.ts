function isFriday(date: Date) {
  return date.getDay() === 5
}

function isWeekend(date: Date) {
  return date.getDay() === 6 || date.getDay() === 0
}

function isLeapYear(date: Date) {
  return date.getFullYear() % 4 === 0
}