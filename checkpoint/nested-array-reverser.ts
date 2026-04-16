function nestedArrayReverser(words: string[][]): string {
  words.reverse();
  for (let i = 0; i < words.length; i++) {
    words[i]?.reverse();
  }
  
  const result = words.flat(Infinity).join(" ")
  
  return result;
}

console.log(
  nestedArrayReverser([
    ["hello", "world"],
    ["this", "is"],
    ["a", "test"],
  ])
);

console.log(nestedArrayReverser([]))