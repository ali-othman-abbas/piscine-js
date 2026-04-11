function letterSpaceNumber(str) {
  return str.match(/[a-zA-Z] [0-9][^0-9a-zA-Z]/g)
}
