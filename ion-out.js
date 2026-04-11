function ionOut(str) {
  return str.match(/[a-zA-Z]*t(?=ion)/g)
}