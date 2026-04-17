function format(date: Date, str: string) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const tokens: Record<string, string> = {
    yyyy: String(Math.abs(date.getFullYear())).padStart(4, "0"),
    y: String(Math.abs(date.getFullYear())),
    GGGG: date.getFullYear() >= 1 ? "Anno Domini" : "Before Christ",
    G: date.getFullYear() >= 1 ? "AD" : "BC",
    MMMM: months[date.getMonth()]!,
    MMM: months[date.getMonth()]?.slice(0, 3)!,
    MM: String(date.getMonth() + 1).padStart(2, "0"),
    M: String(date.getMonth() + 1),
    dd: String(date.getDate()).padStart(2, "0"),
    d: String(date.getDate()),
    EEEE: weekdays[date.getDay()]!,
    E: weekdays[date.getDay()]?.slice(0, 3)!,
    hh: String(date.getHours() % 12).padStart(2, "0"),
    h: String(date.getHours() % 12),
    mm: String(date.getMinutes()).padStart(2, "0"),
    m: String(date.getMinutes()),
    ss: String(date.getSeconds()).padStart(2, "0"),
    s: String(date.getSeconds()),
    HH: String(date.getHours()).padStart(2, "0"),
    H: String(date.getHours()),
    a: date.getHours() < 12 ? "AM" : "PM",
  };
  return str.replace(
    /yyyy|GGGG|MMMM|EEEE|MMM|MM|dd|hh|mm|ss|HH|y|G|M|d|E|h|m|s|H|a/g,
    (token) => tokens[token]!,
  );
}
