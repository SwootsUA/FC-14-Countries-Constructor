class Country {
    constructor(title, capital, population, area) {
        this.title = title;
        this.capital = capital;
        this.population = Number(population);
        this.area = Number(area);        
    }

    showCountry() {
        console.log(`title: ${this.title}, capital: ${this.capital}, population: ${this.population}, area: ${this.area}`)        
    }
}

const country = new Country('tit', 'tut', 123, 321);
country.showCountry();