function sameAmount(str: string, regex1: RegExp, regex2: RegExp) {
  const matches1 = Array.from(str.matchAll(regex1)).length
  const matches2 = Array.from(str.matchAll(regex2)).length
  return matches1 === matches2
}