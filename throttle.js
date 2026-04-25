function throttle(func, wait) {
  let lastArgs = null;
  let firstCallInWindow = true
  let timeout = null;
  return (...args) => {
    lastArgs = args;
    if (firstCallInWindow && timeout) {
      firstCallInWindow = false
    }
    if (firstCallInWindow) {
      func(...lastArgs)
      timeout = setTimeout(() => {
        if (!firstCallInWindow) {
          func(...lastArgs);
        }
        timeout = null;
        firstCallInWindow = true
      }, wait);
    }
  };
}

function opThrottle(func, wait, {trailing = true, leading = true}) {
  let lastArgs = null;
  let firstCallInWindow = true
  let timeout = null;
  return (...args) => {
    lastArgs = args;
    if (firstCallInWindow && timeout) {
      firstCallInWindow = false
    }
    if (firstCallInWindow) {
      if (leading) {
        func(...lastArgs)
      } else if (trailing) {
        firstCallInWindow = false
      }
      timeout = setTimeout(() => {
        if (!firstCallInWindow) {
            func(...lastArgs);
        }
        timeout = null;
        firstCallInWindow = true
      }, wait);
    }
  };
}
