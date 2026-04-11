function letterSpaceNumber(str) {
  return [...str.match(/[a-zA-Z] [0-9](?=[^a-zA-Z0-9])/g)]
}
