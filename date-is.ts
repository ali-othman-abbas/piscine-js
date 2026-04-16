const isValid = (date: Date | number) =>
  (date instanceof Date && !Number.isNaN(date.getTime())) ||
  (typeof date === "number" && !Number.isNaN(new Date(date).getTime()));

const isAfter = (date1: Date, date2: Date) => date1.getTime() > date2.getTime();

const isBefore = (date1: Date, date2: Date) =>
  date1.getTime() < date2.getTime();

const isFuture = (date: Date) =>
  isValid(date) && isAfter(date, new Date(Date.now()));

const isPast = (date: Date) =>
  isValid(date) && isBefore(date, new Date(Date.now()));

