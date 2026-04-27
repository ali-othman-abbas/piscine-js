
async function interpolation({ step, start, end, callback, duration }) {
  const mov = (end - start) / step;
  const durStep = duration / step

  const inner = (x, y) => {
    setTimeout(() => {
      callback([x, y])
    }, y)
  }
  for (let i = 0; start + mov * i < end; i++) {
    const x = start + mov * i;
    const y = (i + 1) * durStep;
    inner(x, y)
  }
    
}