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
        func(...lastArgs)
        timeout.refresh()
        callInWindow = false
      }
    }, wait)
  };
}

function opThrottle(func, wait, {trailing = true, leading = true}) {
  let lastArgs = null;
  let firstCall = true
  if (!leading) {
    firstCall = false
  }
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
          func(...lastArgs)
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

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const result = opThrottle((i) => console.log(i), 26, {leading: false, trailing: true})

async function hello() {
  result(26)
  await sleep(16)
  result(27)
  
}
hello()