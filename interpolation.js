function interpolation({ step, start, end, callback, duration }) {
  const mov = (end - start) / step;

  let i = 1;
  let x = start + step * i;
  let y = duration * (step * (i + 1));
  const id = setInterval(() => {
    callback([x, y]);
    i++;
    x = start + step * i;
    y = duration * (step * (i + 1));
    if (x === end) id.close();
  }, y);
}
