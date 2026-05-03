import { readdir, readFile, writeFile } from "fs/promises";
import { argv } from "process";

async function filterForYes(path) {
  try {
    const file = await readdir(path);
    const promiseMap = file.map((el) =>
      readFile(`${path}/${el}`, {
        encoding: "utf8",
      }),
    );
    const jsons = await Promise.all(promiseMap);
    const yesMen = file.filter(
      (_, idx) => JSON.parse(jsons[idx]).answer === "yes",
    )
    .map((el) => el.split(".")[0].split("_"))
    .toSorted((a, b) => a[1].localeCompare(b[1]))
    .map(([first, last], idx) => `${idx + 1}. ${last} ${first}`)
    await writeFile("vip.txt", yesMen.join("\n"));
    yesMen.forEach((el) => console.log(el))
  } catch (err) {
    console.log(err);
  }
}

const path = argv[2];

filterForYes(path);
