function sameAmount(str: string, regex1: RegExp, regex2: RegExp) {
  const regex1G = (regex1.global) ?  regex1 : new RegExp(regex1.source, regex1.flags + 'g')
  const regex2G = (regex2.global) ?  regex2 : new RegExp(regex2, regex2.flags + 'g')
  
  const matches1 = Array.from(str.matchAll(regex1G)).length
  const matches2 = Array.from(str.matchAll(regex2G)).length
  return matches1 === matches2
}