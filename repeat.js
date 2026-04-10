const repeat = (str, num) => (num > 0) ? `${str}${repeat(str, num - 1)}`: ''
