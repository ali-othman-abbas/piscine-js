function throttle(func, wait) {
  let lastArgs = null;
  let timeout = null;
  return (...args) => {
    lastArgs = args;
    if (timeout === null) {
      timeout = setTimeout(() => {
        func(...lastArgs);
        timeout = null;
      }, wait);
    }
  };
}

function opThrottle(func, wait, options) {
  let lastArgs = null;
  let timeout = null;
  return (...args) => {
    lastArgs = args;
    if (timeout === null) {
      if (options.leading) {
        func(...lastArgs);
      }
      timeout = setTimeout(() => {
        if (options.trailing) {
          func(...lastArgs);
        }
        timeout = null;
      }, wait);
    }
  };
}
