import { readFile, rm, writeFile } from "fs/promises";
const args = process.argv.slice(2);

const arg1 = args[0];
const arg2 = args[1];
const arg3 = args[2];
const arg4 = args[3];
main(arg1, arg2, arg3, arg4);

/**
 *
 * @param {string | undefined} fileName
 * @param {string | undefined} command
 * @param {string | undefined} name
 * @param {string | undefined} numStr
 * @returns
 */
async function main(fileName, command, name, numStr) {
  if (fileName === "help" || !fileName) {
    console.log(`Commands:
    - create: takes a filename as argument and create it (should have \`.json\` extension specified)
    - delete: takes a filename as argument and delete it
    <!-- etc. -->`);
    return;
  }
  if (command === "ls" || !command) {
    await ls(fileName);
    return;
  }
  if (fileName && command === "create") {
    await writeFile(fileName, "{}");
    return;
  }

  if (fileName && command === "delete") {
    await rm(fileName);
    return;
  }

  if (fileName && command === "add" && !name) {
    console.log("No elem specified");
    return;
  }

  if (fileName && command === "add" && name) {
    const num = Number(numStr);
    addToFile(fileName, name, num);
  }

  if (fileName && command === "rm" && !name) {
    console.log("No elem specified");
    return;
  }
  if (fileName && command === "rm" && name) {
    if (numStr === undefined) {
      deleteFromFile(fileName, name, undefined);
      return
    }
    const num = Number(numStr);
    deleteFromFile(fileName, name, num);
    return;
  }
}

/**
 *
 * @param {string} fileName
 * @param {string} name
 * @param {number} num
 */
async function addToFile(fileName, name, num) {
  let addNum = num;
  if (Number.isNaN(num)) {
    addNum = 1;
  }
  if (addNum < 0) {
    await deleteFromFile(fileName, name, -1 * addNum);
    return;
  }

  let list = null;
  const content = await readFile(fileName, "utf8");
  list = JSON.parse(content);
  if (!(name in list)) {
    list[name] = 0;
  }
  list[name] = list[name] + addNum;
  
  await writeFile(fileName, JSON.stringify(list))
}

/**
 *
 * @param {string} fileName
 * @param {string} name
 * @param {number | undefined} num
 */
async function deleteFromFile(fileName, name, num) {
  if (Number.isNaN(num)) {
    console.log("Unexpected request: nothing has been removed");
    return;
  }
  if (num < 0) {
    await addToFile(fileName, name, -1 * num);
    return;
  }

  let list = null;
  const content = await readFile(fileName, "utf8");
  list = JSON.parse(content);
  if (!num) {
    delete list[name];
    await writeFile(fileName, JSON.stringify(list))
    return 
  }
  list[name] = list[name] - num;
  if (list[name] <= 0) {
    delete list[name];
  }
  await writeFile(fileName, JSON.stringify(list))
}

/**
 *
 * @param {string} fileName
 */
async function ls(fileName) {
  const list = JSON.parse(await readFile(fileName, "utf8"));

  let isEmpty = true;
  for (const key in list) {
    if (isEmpty) {
      isEmpty = !isEmpty;
    }
    console.log(`- ${key} (${list[key]})`);
  }
}
