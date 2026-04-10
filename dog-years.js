const ageConvs = {
  'earth': 1.0,
  'mercury': 0.2408467,
  'venus': 0.61519726,
  'jupiter': 11.862615,
  'saturn': 29.447498,
  'uranus': 84.016846,
  'neptune': 164.79132 
}
function dogYears(planetName, dogAgeInSecs) {
  const roundedResult = ((dogAgeInSecs/(31_557_600))*ageConvs[planetName]*7).toFixed(2)
  return parseFloat(roundedResult)
}

console.log(dogYears('earth', 1_000_000_000))