const adder = (arr: number[], sum: number = 0) =>
  arr.reduce((sum, num) => (sum = sum + num), sum);

const sumOrMul = (arr: number[], sum: number = 0) =>
  arr.reduce(
    (sum, num) => (num % 2 == 0 ? (sum = sum * num) : (sum = sum + num)),
    sum,
  );

const funcExec = (funcs: ((arg: number) => number)[], x: number) =>
  funcs.reduce((x, func) => (x = func(x)), x);
