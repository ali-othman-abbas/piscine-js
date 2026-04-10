const sourceObject = {
  num: 42,
  bool: true,
  str: 'some text',
  log: console.log,
}
function get(key) {
  if (Object.hasOwn(sourceObject, key)) {
    return sourceObject.key
  }
}

function set(key, value) {
  if (Object.hasOwn(sourceObject, key)) {
    sourceObject[key] = value
  }
  return value
}

console.log(get("num"))