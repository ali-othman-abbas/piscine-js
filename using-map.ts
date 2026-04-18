const citiesOnly = (arr: Record<string, string>[]) =>
  arr.map((ele) => ele["city"]);

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
  const trimmed = trimTemp(arr)
  const deg = fahrenheitToCelsius(trimmed.map((ele) => ele["temperature"]!));
  const cap = upperCasingStates(trimmed.map((ele) => ele["state"]!));
  return trimmed.map(
    (ele, idx) => `${deg[idx]}elsius in ${ele["city"]}, ${cap[idx]}`,
  );
}

