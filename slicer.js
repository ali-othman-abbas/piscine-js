const slice = (str, start, end = str.length) =>
  (end > str.length)
    ? slice(str, start, str.length)
    : end < 0
      ? slice(str, start, Math.max(str.length + end, 0))
      : start < 0
        ? slice(str, Math.max(str.length + start, 0), end)
        : start < end
          ? str[start] + slice(str, start + 1, end)
          : ""
