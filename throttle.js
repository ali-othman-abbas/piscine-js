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
      if (leading) {
        callInWindow = true
      }
    }
    timeout = setTimeout(() => {
      if (callInWindow) {
        if (trailing) {
          func(...args)
        }
        timeout.refresh()
        callInWindow = false
        if (leading) {
          firstCall = true
        }
      }
    }, wait)
  };
}
