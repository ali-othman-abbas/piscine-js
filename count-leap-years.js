function countLeapYears(date) {
    date.setUTCFullYear(date.getUTCFullYear() % 4 !== 0 && date.getUTCFullYear() !== 0 ? date.getUTCFullYear() : date.getUTCFullYear() - 1);
    var divisibleBy4 = Math.trunc(date.getUTCFullYear() / 4);
    var divisibleBy100 = Math.trunc(date.getUTCFullYear() / 100);
    var divisibleBy400 = Math.trunc(date.getUTCFullYear() / 400);
    return divisibleBy4 - divisibleBy100 + divisibleBy400;
}
