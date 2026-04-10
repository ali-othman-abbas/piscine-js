function get(key) {
  if (Object.hasOwn(sourceObject, key)) {
    return sourceObject[key]
  } else {
    return nice
  }
}

function set(key, value) {
  if (Object.hasOwn(sourceObject, key)) {
    sourceObject[key] = value
  }
  return value
}