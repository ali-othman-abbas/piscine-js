// const nutritionDB = {
//   tomato: {
//     calories: 18,
//     protein: 0.9,
//     carbs: 3.9,
//     sugar: 2.6,
//     fiber: 1.2,
//     fat: 0.2,
//   },
//   vinegar: {
//     calories: 20,
//     protein: 0.04,
//     carbs: 0.6,
//     sugar: 0.4,
//     fiber: 0,
//     fat: 0,
//   },
//   oil: { calories: 48, protein: 0, carbs: 0, sugar: 123, fiber: 0, fat: 151 },
//   onion: { calories: 0, protein: 1, carbs: 9, sugar: 0, fiber: 0, fat: 0 },
//   garlic: {
//     calories: 149,
//     protein: 6.4,
//     carbs: 33,
//     sugar: 1,
//     fiber: 2.1,
//     fat: 0.5,
//   },
//   paprika: {
//     calories: 282,
//     protein: 14.14,
//     carbs: 53.99,
//     sugar: 1,
//     fiber: 0,
//     fat: 12.89,
//   },
//   sugar: {
//     calories: 387,
//     protein: 0,
//     carbs: 100,
//     sugar: 100,
//     fiber: 0,
//     fat: 0,
//   },
//   orange: {
//     calories: 49,
//     protein: 0.9,
//     carbs: 13,
//     sugar: 9,
//     fiber: 0.2,
//     fat: 0.1,
//   },
// };
/**
 * @template T
 * @param {Record<string, T>} obj
 * @param {([k, v]: [string, T]) => boolean} func
 * @returns {Record<string, T>}
 */
function filterEntries(obj, func) {
  return Object.fromEntries(Object.entries(obj).filter(func));
}

/**
 * @template T
 * @param {Record<string, T>} obj
 * @param {([k, v]) => [k:string, v:T]} func
 * @returns {Record<string, T>}
 */
function mapEntries(obj, func) {
  return Object.fromEntries(Object.entries(obj).map(func));
}

function reduceEntries(obj, func, accum) {
  if (accum === undefined) {
    return Object.entries(obj).reduce(func);
  } else {
    return Object.entries(obj).reduce(func, accum);
  }
}

function totalCalories(obj) {
  obj = Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, v/100]))
  return reduceEntries(
    obj,
    (accum, [k, v]) => accum + nutritionDB[k]["calories"] * v,
    0,
  );
}

function lowCarbs(obj) {
  return filterEntries(obj, ([k, v]) => nutritionDB[k]["carbs"] * v/100 < 50);
}

function cartTotal(obj) {
  obj = Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, v/100]))
  return mapEntries(obj, ([k, v]) => [
    k,
    mapEntries(nutritionDB[k], ([_k, _v]) => [_k, Math.round(_v * v * 10)/10]),
  ]);
}



// const groceriesCart = { orange: 500, oil: 20, sugar: 480 }

// console.log('Total calories:')
// console.log(totalCalories(groceriesCart))
// console.log('Items with low carbs:')
// console.log(lowCarbs(groceriesCart))
// console.log('Total cart nutritional facts:')
// console.log(cartTotal(groceriesCart))