const slice = (col, start, end = col.length) =>
  end > col.length
    ? slice(col, start, col.length)
    : end < 0
      ? slice(col, start, Math.max(col.length + end, 0))
      : start < 0
        ? slice(col, Math.max(col.length + start, 0), end)
        : typeof col === "string"
          ? start < end
            ? col[start] + slice(col, start + 1, end)
            : ""
          : start < end
            ? [col[start], ...slice(col, start + 1, end)]
            : [];

