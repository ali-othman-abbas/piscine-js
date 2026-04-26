
const add = (arr, el) => arr?.push(el)
const run = (callback, callLimit, nbr) =>
  new Promise((r) => {
    let arr = []
    let inter = setInterval(() => {
      callback(arr, 1)
    }, callLimit)
    setTimeout(() => {
      clearInterval(inter)
      r(arr.length)
    }, callLimit * nbr)
  })

function throttle(func, wait) {
  let firstCall = true;
  let callInWindow = false;
  let timeout = null;
  let lastArgs = null;

  return (...args) => {
    lastArgs = args;

    if (firstCall) {
      func(...lastArgs);
      firstCall = false;
    } else if (timeout !== null) {
      callInWindow = true; // called during an active window
    }

    if (timeout === null) {
      timeout = setTimeout(function tick() {
        if (callInWindow) {
          func(...lastArgs);
          callInWindow = false;
          timeout = setTimeout(tick, wait); // keep watching
        } else {
          timeout = null; // quiet period, stop
        }
      }, wait);
    }
  };
}

//to be fixed
function opThrottle(func, wait, { leading = true, trailing = true } = {}) {
  let timeout = null;
  let lastArgs = null;
  let lastCallTime = null; // time of last leading-edge fire

  return (...args) => {
    lastArgs = args;
    const now = Date.now();

    // How long since we last fired on the leading edge
    const timeSinceLastCall = lastCallTime === null ? Infinity : now - lastCallTime;
    const canFireLeading = leading && timeSinceLastCall >= wait;

    if (canFireLeading) {
      // Fire immediately on leading edge
      if (timeout !== null) {
        clearTimeout(timeout);
        timeout = null;
      }
      lastCallTime = now;
      func(...lastArgs);
    } else if (trailing && timeout === null) {
      // Schedule a trailing-edge call
      const remainingWait = wait - timeSinceLastCall;
      timeout = setTimeout(function tick() {
        func(...lastArgs);
        lastCallTime = Date.now();
        timeout = null;

        // If more calls came in during trailing wait, keep watching
        // (lastArgs would have been updated by then)
      }, remainingWait);
    } else if (trailing && timeout !== null) {
      // Already have a trailing timer — just update lastArgs (done above)
      // The existing timer will fire with the latest args
    }
  };
}


function trailingThrottle(func, wait) {
  let callInWindow = false
  let timeout = null;
  let lastArgs = null
  return (...args) => {
    lastArgs = args
    if (!callInWindow) {
      callInWindow = true
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

function leadingThrottle(func, wait) {
  let calledInWindow = false;
  let timeout = null;
  let lastArgs = null
  return (...args) => {
    lastArgs = args
    if (!calledInWindow) {
      func(...lastArgs)
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

const fun = throttle((i) => console.log(i), 100)

let i = 0
setInterval(
  () => {
    fun(i)
    i++
  },
  100
)

// async function hello() {
  
//   const result = await run(throttle(add, 100), 26, 5)
//   console.log(result)
// }

// hello()