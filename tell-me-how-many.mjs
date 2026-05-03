import { readdir } from "fs/promises";
import { argv } from "process";

/**
 *
 * @param {string} path
 * @returns
 */
async function countFiles(path) {
  let files = null;
  try {
    files = await readdir(path);
  } catch (err) {
    console.log(err);
    return;
  }
  console.log(files.length);
}

const path = argv[2];

countFiles(path);
