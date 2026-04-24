
/**
 * 
 * @param {string[]} sentences 
 */
function neuron(sentences) {
  const extractRE = /^(\w+):(.*)-\s*Response:(.*)$/
  const result = {}
  for (const s of sentences) {
    const groups = s.match(extractRE)
    const command = groups[1].toLowerCase()
    const commandSingular = command.slice(0, -1)
    const commandArg = groups[2].trim()
    const commandArgProp = commandArg.toLowerCase()
      .replace(/\s/g, '_')
      .replace(/\W/g, '')
    const response = groups[3].trim()
    
    if (!(command in result)) {
      result[command] = {}
    }
    if (!(commandArgProp in result[command])) {
      result[command][commandArgProp] = {
        responses: []
      }
      result[command][commandArgProp][commandSingular] = commandArg
    }
    result[command][commandArgProp].responses.push(response)
  }
  
  return result
}