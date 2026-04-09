const escapeStr = "`\\/\"'"
const arr = [4, '2'];
const obj = {
  str: "hello",
  num: 1234,
  bool: true,
  undef: undefined,
}
const nested = {
  arr: [4, undefined, '2'],
  obj: {
    str: "hello",
    num: 1234,
    bool: true,
  }
}

Object.freeze(escapeStr)
Object.freeze(arr)
Object.freeze(obj)
Object.freeze(nested)