const citiesOnly = (arr: Record<string, string>[]) =>
  arr.map((ele) => ele["temperature"]);

function upperCasingStates(arr: string[]) {
  return arr.map(
    (ele) => ele.split(" ").map(
      (subEle) => subEle.toUpperCase().charAt(0) + subEle.slice(1)
    ).join(" ")
  );
}

function fahrenheitToCelsius(arr: string[]) {
  return arr.map((ele) => {
    const num = Number(ele.slice(0, -2));
    return `${(5 / 9) * (num - 32)}°C`;
  });
}

function trimTemp(arr: Record<string, string>[]) {
  return arr.map((ele) => {
    ele['temperature'] = ele['temperature']?.trim()!
    return ele
  });
}

function tempForecasts(arr: Record<string, string>[]) {
  const deg = fahrenheitToCelsius(arr.map((ele) => ele["temperature"]!));
  const cap = upperCasingStates(arr.map((ele) => ele["state"]!));
  return arr.map(
    (ele, idx) => `${deg[idx]}elsius in ${ele["city"]}, ${cap[idx]}`,
  );
}

