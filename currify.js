const currify = (func) => {
  const rec = (...args) => {
    if (args.length === func.length) {
      return func(...args)
    }
    
    
    return (newArgs) => rec(...args, newArgs) 
  }
  return (x) => rec(x)
}
  
