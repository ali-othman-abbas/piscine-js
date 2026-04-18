function hasCity(country: string, cities: string[]) {
  return function (city: string): string {
    if (cities.includes(city)) {
      return `${city} is a city from ${country}`;
    } else {
      return `${city} is not a city from ${country}`;
    }
  };
}
