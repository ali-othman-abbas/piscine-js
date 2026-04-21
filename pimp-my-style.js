import { styles } from "./pimp-my-style.data.js";
let last = 0;
export function pimp() {
  const el = document.querySelector("body > button");
  const list = el.classList;
  if (list[list.length - 1] !== "unpimp") {
    list.add(styles[last]);
    last++;
    if (last === styles.length) {
      list.add("unpimp");
    }
  } else {
    list.remove(styles[last]);
    last--;
    if (last <= -1) {
      list.remove("unpimp");
    }
  }
}
