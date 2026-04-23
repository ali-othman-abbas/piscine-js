/**
 * @param {{ [x: string]: any; }} obj
 * @param {string[]} strs
 * @return {{ [x: string]: any; }}
 */
function pick(obj, ...strs) {
  const result = {}
  let set = null
  if (strs.length === 1) {
    set = new Set(strs[0])
  } else {
    set = new Set(...strs)
  }
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
  let set = null
  if (strs.length === 1) {
    set = new Set(strs[0])
  } else {
    set = new Set(...strs)
  }
  for (const k in obj) {
    if (!set.has(k)) {
      result[k] = obj[k]
    }
  }

  return result
}
