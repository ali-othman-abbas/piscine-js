/**
 * @param {{ [x: string]: any; }} obj
 * @param {string[]} strs
 * @return {{ [x: string]: any; }}
 */
function pick(obj, ...strs) {
  const set = new Set(strs)
  for (const k in obj) {
    if (!set.has(k)) {
      delete obj[k]
    }
  }
  
  return obj
}

/**
 * @param {{ [x: string]: any; }} obj
 * @param {string[]} strs
 * @return {{ [x: string]: any; }}
 */
function omit(obj, ...strs) {
  const set = new Set(strs)
  for (const k in obj) {
    if (set.has(k)) {
      delete obj[k]
    }
  }
  
  return obj
}