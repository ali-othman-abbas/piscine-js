function get(key) {
  if (Object.hasOwn(sourceObject, key)) {
    return sourceObject[key]
  }
}

function set(key, value) {
  if (Object.hasOwn(sourceObject, key)) {
    sourceObject[key] = value
    return value
  }
}
