function getURL(str: string): Array<string> {
  const regex = /https?:\/\/[^\s]+/g
  return str.match(regex) ?? []
}

function greedyQuery(str: string): Array<string> {
  const regex = /https?:\/\/[^\s]+/g
  return str.match(regex) ?? []
}

function notSoGreedy(str: string): Array<string> {
  const regex = /https?:\/\/[^\s]+/g
  return str.match(regex) ?? []
}
