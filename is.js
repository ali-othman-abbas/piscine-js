const is = {}


is.num = (v) => typeof v === 'number'
is.nan = (v) => v !== v
is.str = (v) => typeof v === 'string'
is.bool = (v) => typeof v === 'boolean'
is.undef = (v) => v === undefined
is.arr = (v) => Array.isArray(v)
is.obj = (v) => typeof v === 'object' || v === null
is.fun = (v) => typeof v === 'function'
is.truthy = (v) => !!v
is.falsy = (v) => !!v