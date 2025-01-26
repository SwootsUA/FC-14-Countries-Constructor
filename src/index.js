function Country(title, capital, population, area) {   
    this.title = title;
    this.capital = capital;
    this.population = population;
    this.area = area;
}

/**
 * Logs all info about the country
 */
Country.prototype.showCountry = function () {
    console.log(`title: ${this.title}, capital: ${this.capital}, population: ${this.population}, area: ${this.area}`);
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
const POLAND = new Country('Poland', 'Warsaw', 38_000_000, 312_696);

console.log('======================');
UKRAINE.showCountry();
showObjectFields(UKRAINE);
console.log('======================');
POLAND.showCountry();
showObjectFields(POLAND);