function deepCopy(obj) {
  let isArr = false;
  if (Array.isArray(obj)) {
    isArr = true;
  }
  const copy = {};
  for (const k in obj) {
    if (Array.isArray(obj[k]) || obj[k]?.constructor?.name === "Object") {
      copy[k] = deepCopy(obj[k]);
    } else {
      copy[k] = obj[k];
    }
  }

  if (isArr) {
    return Object.entries(copy).map(([_, v]) => v);
  }

  return copy;
}

function replica(...obj) {
  function deepAssign(obj1, obj2) {
    for (const k in obj2) {
      if (
        k in obj1 &&
        obj1[k]?.constructor?.name === "Object" &&
        obj2[k]?.constructor?.name === "Object"
      ) {
        deepAssign(obj1[k], obj2[k]);
      } else if (k in obj1 && obj2[k]?.constructor?.name === "Object") {
        const copy = {};
        deepAssign(copy, obj2[k]);
        obj1[k] = copy;
      } else if (Array.isArray(obj2[k])) {
        obj1[k] = deepCopy(obj2[k]);
      } else {
        obj1[k] = obj2[k];
      }
    }
  }

  let result = {};
  for (let i = 0; i < obj.length; i++) {
    deepAssign(result, obj[i]);
  }
  
  return result
}