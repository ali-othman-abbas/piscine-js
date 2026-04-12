function groupPrice(str) {
  const regex = /(?:USD|\$)([1-9]\d*|\d)(?:\.([1-9]\d*|\d))?/g
  
  return [...str.matchAll(regex).map(
    m => (m[2]) ? [m[0], m[1], m[2]] : [m[0], m[1]]
  )]
}