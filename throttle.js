function throttle(func, wait) {
  let lastArgs = null;
  let firstCall = true
  let callInWindow = false
  let timeout = null;
  return (...args) => {
    lastArgs = args;
    if (!firstCall && !callInWindow) {
      callInWindow = true
    }
    if (firstCall) {
      func(...lastArgs)
      firstCall = false
    }
    timeout = setTimeout(() => {
      if (callInWindow) {
        func(...args)
        timeout.refresh()
        callInWindow = false
      }
    }, wait)
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
