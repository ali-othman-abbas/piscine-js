function countLeapYears(date: Date) {
  date.setUTCFullYear(
    date.getUTCFullYear() % 4 !== 0 && date.getUTCFullYear() !== 0
      ? date.getUTCFullYear()
      : date.getUTCFullYear() - 1,
  );
  const divisibleBy4 = Math.trunc(date.getUTCFullYear() / 4);
  const divisibleBy100 = Math.trunc(date.getUTCFullYear() / 100);
  const divisibleBy400 = Math.trunc(date.getUTCFullYear() / 400);

  return divisibleBy4 - divisibleBy100 + divisibleBy400;
}
