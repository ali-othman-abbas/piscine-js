import { readFile } from "fs/promises";
import { argv } from "process";

/**
 * 
 * @param {string} path 
 */
async function dicipher(path) {
  try {
    const content = await readFile(path, {encoding: 'utf8'})
    const veryDiscoed = content
     .split(" ")
     .map((el) => {
       const mid = Math.floor(el.length/2)
       return [el.slice(mid), el.slice(0, mid)].join("");
     })
     .join(" ");
    console.log(veryDiscoed)
  } catch (err) {
    console.log(err)
  }
}




const path = argv[2]
dicipher(path)