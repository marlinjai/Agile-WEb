const cities = require("cities");

var myCity = cities.zip_lookup("10016");
console.log(myCity);

const arithmeticsModule = require("../arithmetics.js");

console.log(arithmeticsModule.subNum(5, 3)); // 2
