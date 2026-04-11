function ionOut(str) {
  const result = str.match(/[a-zA-Z]*t(?=ion)/g)
  return (result) ? result : []
}