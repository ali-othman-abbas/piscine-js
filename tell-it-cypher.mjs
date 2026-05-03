import { readdir, readFile, writeFile } from "fs/promises";
import { argv } from "process";

const path = argv[2];
const keyword = argv[3];
let distination = argv[4];

(async function () {
  const content = await readFile(path);
  if (keyword === 'encode') {
    const outputName = distination ? distination : 'cypher.txt'
    await writeFile(outputName, content.toString('base64'))
  } else {
    const outputName = distination ? distination : 'clear.txt'
    await writeFile(outputName, content.toString('utf-8'))
  }
})();
