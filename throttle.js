function throttle(func, wait) {
  let firstCall = true
  let callInWindow = false
  let timeout = null;
  return (...args) => {
    if (!firstCall && !callInWindow) {
      callInWindow = true
    }
    if (firstCall) {
      func(...args)
      firstCall = false
    }
    if (timeout === null) {
      timeout = setTimeout(() => {
        if (callInWindow) {
          func(...args)
          timeout.refresh()
          callInWindow = false
        }
      }, wait)
    }
  };
}

//to be fixed
function opThrottle(func, wait, { trailing, leading }) {
  if ((trailing && leading) || (!trailing && !leading)) {
    return throttle(func, wait)
  }
  if (trailing && !leading) {
    return trailingThrottle(func, wait)
  }
  if (!trailing && leading) {
    return leadingThrottle(func, wait)
  }
}


function trailingThrottle(func, wait) {
  let callInWindow = false
  let timeout = null;
  return (...args) => {
    if (!callInWindow) {
      callInWindow = true
    }
    if (timeout === null) {
      timeout = setTimeout(() => {
        if (callInWindow) {
          func(...args)
          timeout.refresh()
          callInWindow = false
        }
      }, wait)
    }
  };
}

function leadingThrottle(func, wait) {
  let calledInWindow = false;
  let timeout = null;
  return (...args) => {
    if (!calledInWindow) {
      func(...args)
      calledInWindow = true
    }
    if (timeout === null) {
      timeout = setTimeout(() => {
        if (calledInWindow) {
          timeout.refresh()
          calledInWindow = false
        }
      }, wait)
    }
  };
}
