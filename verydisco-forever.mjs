import { writeFile } from "fs/promises";
import { argv } from "process";

 
 const str = argv[2]
 const result = str
   .split(" ")
   .map((el) => {
     const mid = Math.ceil(el.length/2)
     return [el.slice(mid), el.slice(0, mid)].join("");
   })
   .join(" ");
 
 writeFile('./verydisco-forever.txt', result)