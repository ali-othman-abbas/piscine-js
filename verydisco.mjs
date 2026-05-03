/**
 *
 * @type {(str: string) => string}
 */
const verydisco = (str) =>
  str
    .split(" ")
    .map((el) => {
      const mid = Math.ceil(el.length/2)
      return [el.slice(mid), el.slice(0, mid)].join("");
    })
    .join(" ");
