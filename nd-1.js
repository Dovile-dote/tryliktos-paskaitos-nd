"use strict";

// 1
let a = 2;
let b = 1.5;

switch (a + b < 4) {
    case true:
        console.log('Below');
        break;
    default:
        console.log('Over');
}

// 2
let message;
let login = 'Director';

switch (login.trim().toLocaleLowerCase()) {
    case 'employee':
        message = 'Hello';
        break;
    case 'director':
        message = 'Greetings';
        break;
    case '':
        message = 'No login';
        break;
    default:
        message = '';
}
console.log(message);