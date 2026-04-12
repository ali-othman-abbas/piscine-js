const regex = /https?:\/\/[^\s]+/g
function getURL(str: string): Array<string> {
  return str.match(regex) ?? []
}

function greedyQuery(str: string): Array<string> {
  const parameters = /\?([^\s]+=[^\s]+&){2,}[^\s]+=[^\s]+/
  const combined = new RegExp(`${regex.source}${parameters.source}`, 'g')
  return str.match(combined) ?? []
}

function notSoGreedy(str: string): Array<string> {
  const parameters = /\?(?:[^\s]+=[^\s]+&){1,2}[^\s]+=[^\s]+/
  const combined = new RegExp(`${regex.source}${parameters.source}`, 'g')
  return str.match(combined) ?? []
}
