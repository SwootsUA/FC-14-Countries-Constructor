'use strict';

function Country(title, capital, population, area) {   
    this.title = title;
    this.capital = capital;
    this.population = population;
    this.area = area;
}

/**
 * Returns all info about the country
 * @returns {string}
 */
Country.prototype.showCountry = function () {
    return `Country: ${this.title} \nCapital: ${this.capital} \nPopulation: ${this.population} \nArea: ${this.area}`;
}

/**
 * Logs all fields of the object except functions
 * @param {object} obj 
 */
function showObjectFields(obj) {
    for (const key in obj) {
        if (typeof obj[key] != 'function') {
            console.log(`obj.${key} = ${obj[key]}`);
        }
    }
}

const UKRAINE = new Country('Ukraine', 'Kyiv', 41_000_000, 603_500);
const POLAND = new Country('Poland', 'Warsaw', 38_000_000, 322_500);

console.log(UKRAINE.showCountry()); 
showObjectFields(UKRAINE);
console.log('\n======================\n\n');
console.log(POLAND.showCountry()); 
showObjectFields(POLAND);