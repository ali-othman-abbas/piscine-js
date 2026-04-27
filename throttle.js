function throttle(func, wait) {
	let lastCallTime = 0;
	let trailingTimer = null;
	let lastArgs = null;
	let lastThis = null;

	function invoke(thisArg, args) {
		lastCallTime = Date.now();
		return func.apply(thisArg, args);
	}

	function throttled(...args) {
		const now = Date.now();
		const remaining = wait - (now - lastCallTime);
		lastArgs = args;
		lastThis = this;

		if (remaining <= 0) {
			if (trailingTimer) { clearTimeout(trailingTimer); trailingTimer = null; }
			invoke(lastThis, lastArgs);
		} else if (!trailingTimer) {
			trailingTimer = setTimeout(() => {
				trailingTimer = null;
				invoke(lastThis, lastArgs);
				lastArgs = lastThis = null;
			}, remaining);
		}
	}


	return throttled;
}

function opThrottle(func, wait, options = {}) {
	const hasLeading = 'leading' in options;
	const hasTrailing = 'trailing' in options;

	const leading = hasLeading ? !!options.leading : false;
	const trailing = hasTrailing ? !!options.trailing : false;

	let lastCallTime = 0;
	let trailingTimer = null;
	let lastArgs = null;
	let lastThis = null;

	function invoke(thisArg, args) {
		lastCallTime = Date.now();
		return func.apply(thisArg, args);
	}

	function throttled(...args) {
		const now = Date.now();
		const remaining = wait - (now - lastCallTime);
		lastArgs = args;
		lastThis = this;

		if (remaining <= 0) {
			if (trailingTimer) { clearTimeout(trailingTimer); trailingTimer = null; }

			if (leading) {
				invoke(lastThis, lastArgs);
				if (trailing) {
					trailingTimer = setTimeout(() => {
						trailingTimer = null;
						const fireTime = Date.now();
						lastCallTime = fireTime;
						invoke(lastThis, lastArgs);
						lastArgs = lastThis = null;
					}, wait);
				}
			} else if (trailing) {
				lastCallTime = now;
				trailingTimer = setTimeout(() => {
					trailingTimer = null;
					lastCallTime = Date.now() + wait;
					func.apply(lastThis, lastArgs);
					lastArgs = lastThis = null;
				}, wait);
			}
		} else {
			if (trailing && !trailingTimer) {
				trailingTimer = setTimeout(() => {
					trailingTimer = null;
					lastCallTime = leading ? Date.now() : Date.now() + wait;
					func.apply(lastThis, lastArgs);
					lastArgs = lastThis = null;
				}, remaining);
			}
		}
	}

	return throttled;
}
// function throttle(func, wait) {
//   let firstCall = true
//   let callInWindow = false
//   let timeout = null;
//   let lastArgs = null
//   return (...args) => {
//     lastArgs = args
//     if (!firstCall && !callInWindow) {
//       callInWindow = true
//     }
//     if (firstCall) {
//       func(...lastArgs)
//       firstCall = false
//     }
//     if (timeout === null) {
//       timeout = setTimeout(() => {
//         if (callInWindow) {
//           func(...lastArgs)
//           timeout.refresh()
//           callInWindow = false
//         }
//       }, wait)
//     }
//   };
// }

// //to be fixed
// function opThrottle(func, wait, { trailing, leading }) {
//   if ((trailing && leading) || (!trailing && !leading)) {
//     return throttle(func, wait)
//   }
//   if (trailing && !leading) {
//     return trailingThrottle(func, wait)
//   }
//   if (!trailing && leading) {
//     return leadingThrottle(func, wait)
//   }
// }


// function trailingThrottle(func, wait) {
//   let callInWindow = false
//   let timeout = null;
//   let lastArgs = null
//   return (...args) => {
//     lastArgs = args
//     if (!callInWindow) {
//       callInWindow = true
//     }
//     if (timeout === null) {
//       timeout = setTimeout(() => {
//         if (callInWindow) {
//           func(...lastArgs)
//           timeout.refresh()
//           callInWindow = false
//         }
//       }, wait)
//     }
//   };
// }

// function leadingThrottle(func, wait) {
//   let calledInWindow = false;
//   let timeout = null;
//   let lastArgs = null
//   return (...args) => {
//     lastArgs = args
//     if (!calledInWindow) {
//       func(...lastArgs)
//       calledInWindow = true
//     }
//     if (timeout === null) {
//       timeout = setTimeout(() => {
//         if (calledInWindow) {
//           timeout.refresh()
//           calledInWindow = false
//         }
//       }, wait)
//     }
//   };
// }
