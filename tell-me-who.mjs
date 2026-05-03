import { readdir } from "fs/promises";
import { argv } from "process";

async function list(path) {
  try {
    const files = await readdir(path)
    const result = files
      .map(el => el.split('.')[0].split('_'))
      .toSorted((a, b) => a[1].localeCompare(b[1]))
      .map(([first, last], idx) => {
        return `${idx + 1}. ${last} ${first}`
      })
    
    console.log(result)
  } catch (err) {
    console.log(err)
  }
}

const path = argv[2]

list(path)
