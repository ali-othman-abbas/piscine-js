const slice = (str, start, end) =>
  (typeof end !== 'number' || end > str.length)
    ? slice(str, start, str.length)
    : start < 0
      ? slice(str, 0, end)
      : start < end
        ? str[start] + slice(str, start + 1, end)
        : ""

