"use strict";

let a = 150;
let b = 198;
let n = 120;
let m = 150;
let k = 100;

let bulviu_kg_kaina = 0.20;
let runkeliu_kg_kaina = 0.13;
let morku_kg_kaina = 0.16;

function rudensGerybes(a, b, n, m, k) {

    let plotas = ((a * b) / 10000).toFixed(2);

    let bulviu_plotas = (plotas / 3).toFixed(2);
    let runkeliu_plotas = (plotas / 10).toFixed(2);
    let morku_plotas = (plotas - bulviu_plotas - runkeliu_plotas).toFixed(2);

    let bulviu_pelnas = bulviu_plotas * 100 * n * bulviu_kg_kaina;
    let runkeliu_pelnas = runkeliu_plotas * 100 * m * runkeliu_kg_kaina;
    let morku_pelnas = morku_plotas * 100 * k * morku_kg_kaina;

    let pelnas = (bulviu_pelnas + runkeliu_pelnas + morku_pelnas).toFixed(2);



    console.log('Zemes plotas: ' + plotas + ' ha');
    console.log('Bulves uzima ' + bulviu_plotas + ' ha plota');
    console.log('Runkeliai uzima ' + runkeliu_plotas + ' ha plota');
    console.log('Morkos uzima ' + morku_plotas + ' ha plota');
    console.log('Pelnas: ' + pelnas + ' €‎');
}

rudensGerybes(a, b, n, m, k)