const regex = /https?:\/\/[^\s]+/
function getURL(str: string): Array<string> {
  return str.match(new RegExp(regex.source, 'g')) ?? []
}

function greedyQuery(str: string): Array<string> {
  const parameters = /\?([^\s=&]+=[^\s=&]+&){2,}[^\s=&]+=[^\s=&]+\b/
  const combined = new RegExp(`${regex.source}${parameters.source}`, 'g')
  return str.match(combined) ?? []
}

function notSoGreedy(str: string): Array<string> {
  const parameters = /\?(?:[^\s=&]+=[^\s=&]+&){1,2}[^\s=&]+=[^\s=&]+\b/
  const combined = new RegExp(`${regex.source}${parameters.source}`, 'g')
  return str.match(combined) ?? []
}