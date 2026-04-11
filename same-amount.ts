function sameAmount(str: string, regex1: RegExp, regex2: RegExp) {
  
  function countMatches(str: string, regex: RegExp) {
    const regexG = (regex.global) ?  regex : new RegExp(regex.source, regex.flags + 'g')
    let count = 0
    while (regexG.exec(str) !== null) {
      count++
    }
    return count
  }
  
  
  return countMatches(str, regex1) === countMatches(str, regex2)
}