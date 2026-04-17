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
    if (obj.day !== '*' && Number(obj.day) !== date.getUTCDate()) {
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