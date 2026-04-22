export function createCircle() {
  document.addEventListener("click", (e) => {
    const el = document.createElement("div");
    el.classList.add("circle");
    document.body.append(el);
    const radius = el.getBoundingClientRect().width / 2;
    el.style.left = `${e.x - radius}px`;
    el.style.top = `${e.y - radius}px`;
    el.style.background = "white";
  });
}

export function moveCircle() {
  document.addEventListener("mousemove", (e) => {
    const lastCircle = getLastCircle();
    if (lastCircle === null) return;
    const circlePos = lastCircle.getBoundingClientRect();
    const radius = circlePos.width / 2;

    const xCircle = circlePos.left + radius;
    const yCircle = circlePos.top + radius;
    /**@type {HTMLDivElement} */
    const box = document.querySelector(".box");

    let xPos = e.x;
    let yPos = e.y;

    if (box !== null && insideBox(box, { x: xCircle, y: yCircle, radius })) {
      if (lastCircle.style.background !== 'var(--purple)') {
        lastCircle.style.background = "var(--purple)";
      }

      const boxPos = box.getBoundingClientRect();
      xPos = clamp(boxPos.left + radius + 1, xPos, boxPos.right - radius - 1);
      yPos = clamp(boxPos.top + radius + 1, yPos, boxPos.bottom - radius - 1);
    }
    lastCircle.style.left = `${xPos - radius}px`;
    lastCircle.style.top = `${yPos - radius}px`;
  });
}

export function setBox() {
	const box = document.createElement('div');
	box.classList.add('box');
	document.body.append(box);
}

/**
 *
 * @returns {HTMLDivElement}
 */
const getLastCircle = () =>
  document.querySelector("body > div.circle:last-of-type");

/**
 *
 * @param {number} min
 * @param {number} val
 * @param {number} max
 * @returns {number}
 */
function clamp(min, val, max) {
  if (val < min) {
    return min;
  }
  if (val > max) {
    return max;
  }
  return val;
}

/**
 *
 * @param {HTMLDivElement} box
 * @param {{x: number; y: number; radius: number;}} circle
 */
function insideBox(box, { x, y, radius }) {
  if (box === null) return null;

  const boxPos = box.getBoundingClientRect();
  return (
    boxPos.left < x - radius &&
    boxPos.right > x + radius &&
    boxPos.top < y - radius &&
    boxPos.bottom > y + radius
  );
}
