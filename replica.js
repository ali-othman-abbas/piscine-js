
function deepCopy(obj) {
  let isArr = false
  if (Array.isArray(obj)) {
    isArr = true
  }
  const copy = {}
  for (const k in obj) {
    if (Array.isArray(obj[k]) || obj[k]?.constructor === 'Object') {
      copy[k] = deepCopy(obj[k])
    } else {
      copy[k] = obj[k]
    }
  }

  if (isArr) {
    return Object.entries(copy).map(([_, v]) => v)
  }

  return copy
}

function replica(...obj) {
  if (obj.length === 0) {
    return {}
  }
  if (obj.length === 1) {
    return deepCopy(obj[0])
  }
  const mid = Math.floor(obj.length / 2)
  const h1 = replica(...obj.slice(0, mid))
  const h2 = replica(...obj.slice(mid))
  for (const k in h2) {
    h1[k] = h2[k]
  }
  
  return h1
}

