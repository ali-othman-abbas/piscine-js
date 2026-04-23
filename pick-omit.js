/**
 * @param {{ [x: string]: any; }} obj
 * @param {string | string[]} strs
 * @return {{ [x: string]: any; }}
 */
function pick(obj, strs) {
  const result = {}
  let set = null
  if (typeof strs === 'string') {
    set = new Set()
    set.add(strs)
  } else {
    set = new Set(strs)
  }
  for (const k of Object.keys(obj)) {
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
function omit(obj, strs) {
  const result = {}
  let set = null
  if (typeof strs === 'string') {
    set = new Set()
    set.add(strs)
  } else {
    set = new Set(strs)
  }
  for (const k of Object.keys(obj)) {
    if (!set.has(k)) {
      result[k] = obj[k]
    }
  }

  return result
}
