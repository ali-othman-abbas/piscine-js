const dayStr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'secondMonday', 'secondTuesday', 'secondWednesday', 'secondThursday', 'secondFriday', 'secondSaturday', 'secondSunday']

function addWeek(date: Date) {
  const epoch = new Date('0001-01-01T00:00:00Z')
  const timeFromEpoch = new Date(Math.abs(date.getTime() - epoch.getTime()))
  const day = Math.trunc(timeFromEpoch.getTime()/(1000 * 60 * 60 * 24))
  console.log(dayStr[day % 14])
}

function timeTravel({ date, hour, minute, second }: {
  date: Date,
  hour: number,
  minute: number,
  second: number,
}) {
  date.setUTCHours(hour);
  date.setUTCMinutes(minute);
  date.setUTCSeconds(second);
  
  return date
}