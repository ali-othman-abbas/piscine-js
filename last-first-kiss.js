function first(arg) {
  if (typeof arg == "string" && Array.isArray(arg)) {
    return arg[0]
  }
}

function last(arg) {
  if (typeof arg == "string" && Array.isArray(arg)) {
    return arg[arg.length - 1]
  }
}

function last(arg) {
  if (typeof arg == "string" && Array.isArray(arg)) {
    return [first[arg], last[arg]]
  }
}