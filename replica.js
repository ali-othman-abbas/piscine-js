
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
  let rep = {}
  for (let i = 0; i < obj.length; i++) {
    rep = {...rep, ...deepCopy(obj[i])}
  }
  
  return rep
}