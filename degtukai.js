"use strict";

function arSusidedaFigura(degtukuSkaicius) {
    let kvadratas = false;
    let trikampis = false;
    let staciakampis = false;


    if (degtukuSkaicius % 4 === 0) {
        kvadratas = true;
    }

    if (degtukuSkaicius % 3 === 0) {
        trikampis = true;
    }

    if ((degtukuSkaicius - 2) % 2 === 0) {
        staciakampis = true;
    }

    if (degtukuSkaicius >= 3 && (kvadratas || trikampis || staciakampis)) {
        console.log('Galima');
    }

    else {
        console.log('Negalima');
    }
}

arSusidedaFigura(1);
arSusidedaFigura(2);
arSusidedaFigura(3);
arSusidedaFigura(12);
arSusidedaFigura(15);
arSusidedaFigura(16);
arSusidedaFigura(35);