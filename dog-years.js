const ageConvs = {
  'earth': 1.0,
  'mercury': 0.2408467,
  'venus': 0.61519726,
  'mars': 1.8808158,
  'jupiter': 11.862615,
  'saturn': 29.447498,
  'uranus': 84.016846,
  'neptune': 164.79132 
}
function dogYears(planetName, dogAgeInSecs) {
  const dogAgeInYears = (dogAgeInSecs / 31_557_600)
  const dogAgeInHumanEarthYears = dogAgeInYears / ageConvs[planetName]
  return parseFloat((dogAgeInHumanEarthYears * 7).toFixed(2))
}
