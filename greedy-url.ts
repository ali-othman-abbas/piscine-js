 const authority = /(?:[\w-]+\.)+[\w-]+/
 const path = /(?:\/[\w-]+)*\/?/
function getURL(str: string): Array<string> {
  const parameters = /(?:\?(?:[\w-]+=[\w-]+&)*[\w-]+=[\w-]+)?/
  const regex = new RegExp(`https?://${authority.source}${path.source}${parameters.source}`, 'g')
  return str.match(regex) ?? []
}

function greedyQuery(str: string): Array<string> {
  const greedyParameters = /\?(?:[\w-]+=[\w-]+&){2,}[\w-]+=[\w-]+/
  const regex = new RegExp(`https?://${authority.source}${path.source}${greedyParameters.source}`, 'g')
  return str.match(regex) ?? []
}

function notSoGreedy(str: string): Array<string> {
  const notSoGreedy = /\?(?:[\w-]+=[\w-]+&){1,2}[\w-]+=[\w-]+/
  const regex = new RegExp(`https?://${authority.source}${path.source}${notSoGreedy.source}`, 'g')
  return str.match(regex) ?? []
}
