export function generateLetters() {
  const letters = Array.from(
    { length: 120 },
    () => Math.floor(Math.random() * 26)
  )

  const alpha = Array.from(
    { length: 26 },
    (_, i) => String.fromCharCode(i + 65)
  )
  shuffle(alpha);

  const body = document.body;
  for (let i = 0; i < 120; i++) {
    const el = document.createElement("div");
    el.style.fontSize = `${11 + i}px`;
    if (i < Math.floor(letters.length / 3)) {
      el.style.fontWeight = `300`;
    } else if (i < Math.floor((letters.length * 2) / 3)) {
      el.style.fontWeight = `400`;
    } else {
      el.style.fontWeight = `600`;
    }
    el.textContent = alpha[letters[i]];
    body.append(el);
  }
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
