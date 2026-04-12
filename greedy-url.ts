const regex = /https?:\/\/[^\s]+/
function getURL(str: string): Array<string> {
  return str.match(new RegExp(regex.source, 'g')) ?? []
}

function greedyQuery(str: string): Array<string> {
  const parameters = /\bhttps?:\/\/[^\s]+\?([^\s=&]+=[^\s=&]+&){2,}[^\s=&]+=[^\s=&]+\b/g
  return str.match(parameters) ?? []
}

function notSoGreedy(str: string): Array<string> {
  const parameters = /\bhttps?:\/\/[^\s]+\?(?:[^\s=&]+=[^\s=&]+&){1,2}[^\s=&]+=[^\s=&]+\b/g
  return str.match(parameters) ?? []
}