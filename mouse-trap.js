export function createCircle() {
  document.addEventListener("click", (e) => {
    const el = document.createElement("div");
    el.style.backgroundColor = "white";
    el.classList.add("circle");
    document.body.append(el);
    const width = el.getBoundingClientRect().width;
    el.style.left = `${e.x - width / 2}px`;
    el.style.top = `${e.y - width / 2}px`;
  });
}

export function moveCircle() {
  document.addEventListener("mousemove", (e) => {
    const lastCircle = getLiveCircle();
    if (lastCircle !== null) {
      const width = lastCircle.getBoundingClientRect().width;
      lastCircle.style.left = `${e.x - width / 2}px`;
      lastCircle.style.top = `${e.y - width / 2}px`;
    }
  });
}

export function setBox() {
  const box = document.createElement("div");
  box.classList.add("box");
  document.body.append(box);

  const rect = box.getBoundingClientRect();
  document.addEventListener("mousemove", (e) => {
    const lastCircle = getLiveCircle();
    const position = lastCircle?.getBoundingClientRect();
    const insideX = position?.left > rect.left && position?.right < rect.right;
    const insideY = position?.top > rect.top && position?.bottom < rect.bottom;
    if (insideX && insideY && lastCircle) {
      lastCircle.style.background = `var(--purple)`;
      lastCircle.classList.add("dead");
    }
  });
}

function getLiveCircle() {
  const circles = document.querySelectorAll("body > div.circle:not(.dead)")
  return circles[circles.length - 1] ?? null;
  
}