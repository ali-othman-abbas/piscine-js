
/**
 * @param {Record<string, any>} obj
 * @param {(x: string) => boolean} func
 * @returns {Record<string, any>}
 */
function filterKeys(obj, func) {
  return Object.fromEntries(Object.entries(obj).filter(([k, _]) => func(k)));
}

/**
 * @param {Record<string, any>} obj
 * @param {(x: string) => string} func
 * @returns {Record<string, any>}
 */
function mapKeys(obj, func) {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [func(k), v]));
}

/**
 * @param {Record<string, any>} obj
 * @param {(prev: string, curr: string) => string} func
 * @param {string | undefined} accumulator
 * @return {string}
 */
function reduceKeys(obj, func, accumulator) {
  if (accumulator === undefined) {
    return Object.keys(obj).reduce(func);
  } else {
    return Object.keys(obj).reduce(func, accumulator);
  }
}