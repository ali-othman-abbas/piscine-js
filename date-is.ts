
const tests = []
const t = (f: any) => tests.push(f)

// is the date a valid date?
const invalid = (callback: any, ary = 1) => {
  for (const s of [
    `new Date('')`,
    `new Date(NaN)`,
    `''`,
    `'2013-01-01'`,
    `NaN`,
  ]) {
    if (callback(...Array(ary).fill(eval(s)))) {
      throw Error(`${callback.name}(${s}) should be false`)
    }
  }
}

const isValid = (date: Date) => date instanceof Date && !Number.isNaN(date.getTime())

const isAfter = (date1: Date, date2: Date) =>
  date1.getTime() > date2.getTime()

const isBefore = (date1: Date, date2: Date) =>
  date1.getTime() < date2.getTime()

const isFuture = (date: Date) =>
  isValid(date) && isAfter(date, new Date(Date.now()))

const isPast = (date: Date) =>
  isValid(date) && isBefore(date, new Date(Date.now()))

// isValid