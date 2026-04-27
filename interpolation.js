function interpolation({ step, start, end, callback, duration }) {
  const mov = (end - start) / step;

  let i = 0;
  let x = start + mov * i;
  let y = duration * (mov * (i + 1));
  const id = setInterval(() => {
    callback([x, y]);
    i++;
    x = start + mov * i;
    y = duration * (mov * (i + 1));
    if (x === end) id.close();
  }, y);
}

interpolation({
  step: 5,
  start: 0,
  end: 4,
  duration: 50,
  callback: ([x, y]) => console.log(x, y)
})