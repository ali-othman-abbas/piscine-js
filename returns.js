function id(arg) {
  return arg
}

function getLength(arg) {
  if (typeof arg != "string" && !Array.isArray(arg)) {
    return
  } else {
    return arg.length
  }
}

console.log(getLength([1,2]))