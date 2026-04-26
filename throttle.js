
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
  let firstCall = true
  let callInWindow = false
  let timeout = null;
  let lastArgs = null
  return (...args) => {
    lastArgs = args
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