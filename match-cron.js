function matchCron(str, date) {
    const tokens = str.split(' ');
    const obj = {
        weekDay: tokens.at(-1),
        month: tokens.at(-2),
        day: tokens.at(-3),
        hour: tokens.at(-4),
        minute: tokens.at(-5),
    };
    if (obj.weekDay !== '*' && (Number(obj.weekDay) % 6) !== date.getUTCDay()) {
        return false;
    }
    if (obj.month !== '*' && (Number(obj.month) - 1) !== date.getUTCMonth()) {
        return false;
    }
    if (obj.day !== '*' && Number(obj.day) !== date.getUTCDay()) {
        return false;
    }
    if (obj.hour !== '*' && Number(obj.hour) !== date.getUTCHours()) {
        return false;
    }
    if (obj.minute !== '*' && Number(obj.minute) !== date.getUTCMinutes()) {
        return false;
    }
    return true;
}
console.log(matchCron('9 * * * *', new Date('2020-05-30 18:09:00'))); // -> true
console.log(matchCron('9 * * * *', new Date('2020-05-30 19:09:00'))); // -> true
console.log(matchCron('9 * * * *', new Date('2020-05-30 19:21:00'))); // -> false
//# sourceMappingURL=match-cron.js.map