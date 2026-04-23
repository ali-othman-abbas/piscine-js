/**
 * @typedef {Object} Personel
 * @property {number} id
 * @property {number} pilotingScore
 * @property {number} shootingScore
 * @property {boolean} isForceUser
 */


/**
 * @template T, U
 * @param {Record<string, T>} obj1
 * @returns {(x: Record<string, U>) => Record<string, T | U>}
 */
function defaultCurry(obj1) {
  return function (obj2) {
    /**
     * @type {Record<string, T | U>}
     */
    const result = { ...obj1 };
    for (const k in obj2) {
      result[k] = obj2[k];
    }
    return result;
  };
}

/**
 * @template T
 * @param {([k, v]: [string, T]) => [string, T]} func
 * @returns {(x: Record<string, T>) => Record<string, T>}
 */
function mapCurry(func) {
  return function (obj) {
    return Object.fromEntries(Object.entries(obj).map(func));
  };
}

/**
 * @template T
 * @template U
 * @param {(prev: U, [k, v]: [string, T]) => U} func
 * @returns {(obj: Record<string, T>, accum: U) => U}
 */
function reduceCurry(func) {
  return (obj, accum) => Object.entries(obj).reduce(func, accum);
}

/**
 * @template T
 * @param {([k, v]: [string, T]) => boolean} func
 * @returns {(obj: Record<string, T>) => Record<string, T>}
 */
function filterCurry(func) {
  return (obj) => Object.fromEntries(Object.entries(obj).filter(func));
}

function reduceScore(personal, start) {
  const filtered = filterCurry(([_, v]) => v.isForceUser)(personal);
  return reduceCurry(
    (prev, [_, v]) => prev + v.pilotingScore + v.shootingScore,
  )(filtered, start);
}

function filterForce(personal) {
  return filterCurry(([_, v]) => v.shootingScore >= 80 && v.isForceUser)(personal);
}

function mapAverage(personal) {
  return mapCurry(([k, v]) => [
    k,
    {
      ...v,
      averageScore: (v.shootingScore + v.pilotingScore) / 2,
    },
  ])(personal);
}
