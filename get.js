function get(src, path) {
  const paths = path.split(".")
  let innerSrc = src
  for (const path of paths) {
    
    innerSrc = innerSrc[path]
    if (innerSrc === undefined) {
      return
    }
  }
  return innerSrc
}