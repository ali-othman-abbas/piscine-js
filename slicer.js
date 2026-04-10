const slice = (str, start, end = str.length) =>
  (end > str.length)
    ? slice(str, start, str.length)
    : start < 0
      ? slice(str, Math.max(str.length + start, 0), end)
      : start < end
        ? str[start] + slice(str, start + 1, end)
        : ""
