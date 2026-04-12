function ionOut(str) {
  const result = str.match(/\b[a-zA-Z]*t(?=ion)\b/g) ?? []
  return result
}