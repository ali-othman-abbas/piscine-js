import { readFile, writeFile } from "fs/promises";
import { argv } from "process";

const path = argv[2];
const keyword = argv[3];
let distination = argv[4];

(async () => {
  try {
    const content = await readFile(path, "utf8");
    if (keyword === "encode") {
      const buf = Buffer.from(content, "utf8");
      const outputName = distination ? distination : "cypher.txt";
      await writeFile(outputName, buf.toString("base64"));
    } else {
      const buf = Buffer.from(content, "base64");
      const outputName = distination ? distination : "clear.txt";
      await writeFile(outputName, buf.toString("utf8"));
    }
  } catch (err) {
    console.log(err);
  }
})();
