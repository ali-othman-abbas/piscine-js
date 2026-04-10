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