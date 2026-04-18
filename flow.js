function flow(funcs) {
  return function (...arg) {
    if (funcs.length === 0) {
      return arg
    }
    
    arg = funcs[0](...arg)
    for (let i = 1; i < funcs.length; i++) {
      arg = funcs[i](arg)
    }
    
    return arg
    
  }
}