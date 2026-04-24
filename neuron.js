
/**
 * 
 * @param {string[]} sentences 
 */
function neuron(sentences) {
  const extractRE = /^(\w+):(.*)-\s*Response:(.*)$/
  const result = {}
  sentences.forEach(
    s => {
      const groups = s.match(extractRE).slice(1)
      const command = groups[0].toLowerCase()
      const commandSingular = command.slice(0, -1)
      const commandArg = groups[1].trim()
      const commandArgProp = commandArg.toLowerCase().replace(/ /g, '_')
      const response = groups[2].trim()
      
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
  )
  
  return result
}

const result = neuron(['Orders: shutdown please! - Response: no!'])
console.log(result)
