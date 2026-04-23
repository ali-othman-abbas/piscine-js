/**
 * @param {{ [x: string]: any; }} obj
 * @param {string[]} strs
 * @return {{ [x: string]: any; }}
 */
function pick(obj, ...strs) {
  const result = {}
  const set = new Set(...strs)
  console.log(set)
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
  const set = new Set(...strs)
  for (const k in obj) {
    if (!set.has(k)) {
      result[k] = obj[k]
    }
  }

  return result
}
