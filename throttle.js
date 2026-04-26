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
    if (timeout === null) {
      timeout = setTimeout(() => {
        if (callInWindow) {
          func(...lastArgs)
          timeout.refresh()
          callInWindow = false
        }
      }, wait)
    }
  };
}

//to be fixed
function opThrottle(func, wait, {trailing, leading}) {
  let lastArgs = null;
  let firstCall = true
  if (!leading) {
    firstCall = false
  }
  let setTimer = true
  let callInWindow = false
  return (...args) => {
    lastArgs = args;
    if (!firstCall && !callInWindow) {
      callInWindow = true
    }
    if (firstCall) {
      if (setTimer || !leading || !trailing) {
        func(...lastArgs)
      }
      firstCall = false
      if (leading) {
        callInWindow = true
      }
    }
    if (setTimer) {
      setTimer = false
      const timeout = setTimeout(() => {
        if (callInWindow) {
          if (trailing) {
            func(...lastArgs)
          }
          timeout.refresh()
          callInWindow = false
          if (leading) {
            firstCall = true
          }
        }
      }, wait)
    }
  };
}
