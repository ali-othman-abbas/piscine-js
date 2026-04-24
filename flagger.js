function flags(obj) {
  const alias = {h: 'help'}
  let helpArr = null
  for (const k in obj) {
    if (k === 'help') {
      helpArr = obj[k]
      continue
    }
    
    alias[k[0].toLowerCase()] = k
  }
  
  const discriptions = []
  for (const cmd of helpArr) {
    
    discriptions.push(`-${cmd[0].toLowerCase()}, --${cmd}: ${obj[cmd]}`)
  }
  
  return {
    alias,
    description: discriptions.join('\n')
  }
}
