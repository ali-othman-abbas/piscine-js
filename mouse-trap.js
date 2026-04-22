/**
 * @type {HTMLDivElement}
 */
let lastCircle = null;
/**
 * @type {HTMLDivElement}
 */
let box = null;

let isTrapped = false;

export function createCircle() {
  document.addEventListener("click", (e) => {
    isTrapped = false;
    const el = document.createElement("div");
    el.classList.add("circle");
    document.body.append(el);
    const radius = el.getBoundingClientRect().width / 2;
    el.style.left = `${e.x - radius}px`;
    el.style.top = `${e.y - radius}px`;
    if (box !== null && insideBox(box, { x: e.x, y: e.y, radius })) {
      el.style.background = "var(--purple)";
      isTrapped = true;
    } else {
      el.style.background = "white";
    }
    lastCircle = el;
  });
}

export function moveCircle() {
  document.addEventListener("mousemove", (e) => {
    if (lastCircle === null) return;
    const circlePos = lastCircle.getBoundingClientRect();
    const radius = circlePos.width / 2;

    let xPos = e.x;
    let yPos = e.y;

    if (
      box !== null &&
      (isTrapped || insideBox(box, { x: xPos, y: yPos, radius }))
    ) {
      if (!isTrapped) {
        lastCircle.style.background = "var(--purple)";
        isTrapped = true;
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
  const elBox = document.createElement("div");
  elBox.classList.add("box");
  document.body.append(elBox);

  box = elBox;
}

/**
 *
 * @returns {HTMLDivElement}
 */

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
