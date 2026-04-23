/**
 * @template T
 * @param {Record<string, T>} obj
 * @param {(x: T) => boolean} func
 * @returns {Record<string, T>}
 */
function filterValues(obj, func) {
  return Object.fromEntries(Object.entries(obj).filter(([_, v]) => func(v)));
}

/**
 * @template T
 * @param {Record<string, T>} obj
 * @param {(x: T) => T} func
 * @returns
 */
function mapValues(obj, func) {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, func(v)]));
}

/**
 * @template T
 * @param {Record<string, T>} obj
 * @param {(prev: T, curr: T) => T} func
 * @param {T?} accumulator
 * @param T
 */
function reduceValues(obj, func, accumulator) {
  return Object.entries(obj).reduce(
    ([_, accum], [__, curr]) => ["", func(accum, curr)],
    accumulator !== undefined ? ["", accumulator] : undefined,
  )[1];
}