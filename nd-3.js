"use strict";

let countries = [
    { name: "Lietuva", population: 2794000, area: 65300 },
    { name: "Estija", population: 1325000, area: 45339 },
    { name: "Italija", population: 60360000, area: 301340 },
    { name: "Ispanija", population: 46940000, area: 505990 },
    { name: "Prancuzija", population: 6706000, area: 643801 }
];

function getAreaPerCapita(area, population) {
    let result = ((area / population) * 1000000).toFixed(2);
    return result;
}

function printResult(country, area, population, areaPerCapita) {
    console.log("Salis: ", country + ",", "joje gyvena", population / 1000000, "mln. gyventoju.");
    console.log("Valstybes plotas: ", area, "km², plotas tenkantis vienam gyventojui:", areaPerCapita, "m².");
    console.log("----------------------------------------------------------------------------");
}

for (let i = 0; i < countries.length; i++) {
    let areaPerCapita = getAreaPerCapita(countries[i].area, countries[i].population);
    printResult(countries[i].name, countries[i].area, countries[i].population, areaPerCapita);
}

