/**
 * @param {{ [x: string]: any; }} obj
 * @param {string[]} strs
 * @return {{ [x: string]: any; }}
 */
function pick(obj, ...strs) {
  const result = {}
  if (strs.length === 1) {
    strs = [strs[0]]
  }
  const set = new Set(strs)
  for (const k in obj) {
    if (set.has(k)) {
      result[k] = obj[k]
    }
  }

  return result
}


/**
 * @param {{ [x: string]: any; }} obj
 * @param {string[]} strs
 * @return {{ [x: string]: any; }}
 */
function omit(obj, ...strs) {
  const result = {}
  if (strs.length === 1) {
    strs = [strs[0]]
  }
  const set = new Set(strs)
  for (const k in obj) {
    if (!set.has(k)) {
      result[k] = obj[k]
    }
  }

  return result
}
