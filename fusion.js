/**
 *
 * @param {Record<string, any>} obj1
 * @param {Record<string, any>} obj2
 */
function fusion(obj1, obj2) {
  const keys1 = Object.keys(obj1).sort();
  const keys2 = Object.keys(obj2).sort();
  const result = {};
  for (let i = 0; i < Math.max(keys1.length, keys2.length); ) {
    if (i >= keys1.length) {
      result[keys2[i]] = obj2[keys2[i]];
      i++;
      continue;
    }
    if (i >= keys2.length) {
      result[keys1[i]] = obj1[keys1[i]];
      i++;
      continue;
    }

    const k1 = keys1[i];
    const k2 = keys2[i];

    if (Array.isArray(obj1[k1]) && Array.isArray(obj2[k2])) {
      result[k1] = obj1[k1].concat(obj2[k2]);
    } else if (typeof obj1[k1] === "string" && typeof obj2[k2] === "string") {
      result[k1] = `${obj1[k1]} ${obj2[k2]}`;
    } else if (typeof obj1[k1] === "number" && typeof obj2[k2] === "number") {
      result[k1] = obj1[k1] + obj2[k2];
    } else if (typeof obj1[k1] === "object" && typeof obj2[k2] === "object") {
      const fused = fusion(obj1[k1], obj2[k2]);
      result[k1] = fused;
    } else {
      result[k1] = obj2[k1];
    }
    i++;
  }

  return result;
}

console.log(fusion({ arr: [1, "2"] }, { arr: [2] })); // -> { arr: [ 1, '2', 2 ] })
console.log(
  fusion(
    { arr: [], arr1: [5] },
    { arr: [10, 3], arr1: [15, 3], arr2: ["7", "1"] },
  ),
);

console.log();

console.log(fusion({ str: "salem" }, { str: "alem" }));
console.log(fusion({ str: "salem" }, { str: "" }));

console.log();

console.log(fusion({ a: 10, b: 8, c: 1 }, { a: 10, b: 2 }));

console.log();

console.log(
  fusion({ a: 1, b: { c: "Salem" } }, { a: 10, x: [], b: { c: "alem" } }),
);
console.log(
  fusion(
    { a: { b: [3, 2], c: { d: 8 } } },
    { a: { b: [0, 3, 1], c: { d: 3 } } },
  ),
);

console.log();

console.log(fusion({ a: "hello", b: [] }, { a: 4 }));
