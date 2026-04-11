function get(src, path) {
  const paths = path.split(".")
  let innerSrc = src
  for (let i = 0; i < paths.length; i++) {
    innerSrc = innerSrc[paths[i]]
  }
  return innerSrc
}

const src = { nested: { key: 'peekaboo' } }
const path = 'nested.key'