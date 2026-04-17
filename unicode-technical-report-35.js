function format(date, str) {
    var _a, _b;
    var months = [
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
    var weekdays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    var tokens = {
        yyyy: String(Math.abs(date.getFullYear())).padStart(4, "0"),
        y: String(Math.abs(date.getFullYear())),
        GGGG: date.getFullYear() >= 1 ? "Anno Domini" : "Before Christ",
        G: date.getFullYear() >= 1 ? "AD" : "BC",
        MMMM: months[date.getMonth()],
        MMM: (_a = months[date.getMonth()]) === null || _a === void 0 ? void 0 : _a.slice(0, 3),
        MM: String(date.getMonth() + 1).padStart(2, "0"),
        M: String(date.getMonth() + 1),
        dd: String(date.getDate()).padStart(2, "0"),
        d: String(date.getDate()),
        EEEE: weekdays[date.getDay()],
        E: (_b = weekdays[date.getDay()]) === null || _b === void 0 ? void 0 : _b.slice(0, 3),
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
    return str.replace(/yyyy|GGGG|MMMM|EEEE|MMM|MM|dd|hh|mm|ss|HH|y|G|M|d|E|h|m|s|H|a/g, function (token) { return tokens[token]; });
}
