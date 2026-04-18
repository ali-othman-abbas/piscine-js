function hasCity(country, cities) {
    return function (city) {
        if (cities.includes(city)) {
            return "".concat(city, " is a city from ").concat(country);
        }
        else {
            return "".concat(city, " is not a city from ").concat(country);
        }
    };
}
