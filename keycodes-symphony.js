const map = new Map();
export function compose() {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      document.querySelector("body > div:last-child")?.remove();
      return;
    }
    if (e.key === "Escape") {
      document.body.replaceChildren();
      return;
    }
    const el = document.createElement("div");
    el.classList.add("note");
    el.textContent = e.key;
    if (!map.has(e.key)) {
      map.set(e.key, {
        r: Math.floor(Math.random() * 256),
        g: Math.floor(Math.random() * 256),
        b: Math.floor(Math.random() * 256),
      });
    }
    const rgb = map.get(e.key);
    el.style.backgroundColor = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
    document.body.append(el);
  });
}
