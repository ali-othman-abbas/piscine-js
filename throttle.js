
// const add = (arr, el) => arr?.push(el)
// const run = (callback, callLimit, nbr) =>
//   new Promise((r) => {
//     let arr = []
//     let inter = setInterval(() => {
//       callback(arr, 1)
//     }, callLimit)
//     setTimeout(() => {
//       clearInterval(inter)
//       r(arr.length)
//     }, callLimit * nbr)
//   })

function throttle(func, wait) {
  let firstCall = true;
  let callInWindow = false;
  let timeout = null;
  let lastArgs = null;

  return (...args) => {
    lastArgs = args;

    if (firstCall) {
      func(...args);
      firstCall = false;
    } else {
      callInWindow = true;
    }

    if (timeout === null) {
      timeout = setTimeout(() => {
        if (callInWindow) {
          func(...lastArgs);
        }

        // reset for next window
        callInWindow = false;
        timeout = null;
      }, wait);
    }
  };
}

//to be fixed
function opThrottle(func, wait, { leading = true, trailing = true } = {}) {
  let lastCallTime = 0;
  let timeout = null;
  let lastArgs = null;

  const invoke = (time) => {
    lastCallTime = time;
    func(...lastArgs);
    lastArgs = null;
  };

  const startTimer = (remaining) => {
    timeout = setTimeout(() => {
      timeout = null;

      if (trailing && lastArgs) {
        invoke(Date.now());
      }
    }, remaining);
  };

  return (...args) => {
    const now = Date.now();

    // If leading is false, delay first execution
    if (!lastCallTime && !leading) {
      lastCallTime = now;
    }

    const remaining = wait - (now - lastCallTime);
    lastArgs = args;

    if (remaining <= 0 || remaining > wait) {
      // execute immediately
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      invoke(now);
    } else if (!timeout && trailing) {
      // schedule trailing execution
      startTimer(remaining);
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
