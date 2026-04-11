const dnaToRna = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U',
}
const rnaToDna = {
  'C': 'G',
  'G': 'C',
  'A': 'T',
  'U': 'A',
}
function RNA(str) {
  const result = []
  for (let i = 0; i < str.length; i++) {
    result.push(dnaToRna[str[i]])
  }
  return result.join("")
}
function DNA(str) {
  const result = []
  for (let i = 0; i < str.length; i++) {
    result.push(rnaToDna[str[i]])
  }
  return result.join("")
}