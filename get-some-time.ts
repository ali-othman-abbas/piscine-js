function firstDayWeek(num: number, str: string) {
  const date = new Date(0)
  date.setFullYear(Number(str))
  num = num - 1
  const milliInDay = 24 * 60 * 60 * 1000
  date.setTime(num * 7 * milliInDay + date.getTime() -  2 * milliInDay)
  const day = String(date.getDate()).padStart(2,'0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  
  return `${day}-${month}-${year}`
}
