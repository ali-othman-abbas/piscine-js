function words(str) {
  if (typeof str != 'string') {
    return 
  }
  
  return str.split(" ")
}

function sentence(words) {
  if (!Array.isArray(words)) {
    return
  }
  
  return words.join(" ")
}

function yell(str) {
  if (typeof str != 'string') {
    return
  }
  
  return str.toUpperCase()
}

function whisper(str) {
  if (typeof str != 'string') {
    return
  }
  
  return `*${str.toLowerCase()}*`
}

function capitalize(str) {
  if (typeof str != 'string') {
    return
  }
  
  
  return `${str.charAt(0).toUpperCase()}${str.slice(1).toLowerCase()}`
}

