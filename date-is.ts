const isValid = (date: Date | number) =>
  (date instanceof Date && !Number.isNaN(date.getTime())) ||
  (typeof date === "number" && !Number.isNaN(new Date(date).getTime()));

const isAfter = (date1: Date | number, date2: Date | number) => {
  if (typeof date1 === 'number') {
    date1 = new Date(date1)
  }
  if (typeof date2 === 'number') {
    date2 = new Date(date2)
  }
  
  return date1.getTime() > date2.getTime()
}

const isBefore = (date1: Date | number, date2: Date | number) => {
  if (!isValid(date1) || !isValid(date2)) {
    return false
  }
  if (typeof date1 === 'number') {
    date1 = new Date(date1)
  }
  if (typeof date2 === 'number') {
    date2 = new Date(date2)
  }
  
  return date1.getTime() < date2.getTime()
}

const isFuture = (date: Date) =>
  isValid(date) && isAfter(date, new Date(Date.now()));

const isPast = (date: Date) =>
  isValid(date) && isBefore(date, new Date(Date.now()));

