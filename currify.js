function currify(func) {
  const args = []
  function rec(x) {
    args.push(x)
    if (args.length === func.length) {
      return func(...args)
    }
    
    
    return rec 
  }
  
  return rec
}