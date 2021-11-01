function hasCity(country,citys) {
    return (city) => (citys.indexOf(city) != -1) ? (city + " is a city from " + country) : (city + " is not a city from " + country)
}