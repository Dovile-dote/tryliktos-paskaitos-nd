"use strict";

function concatArrays(masyvas1, masyvas2) {
    return (masyvas1.concat(masyvas2)).sort();
}

console.log(concatArrays([5, 3], [1, 4]));
console.log(concatArrays(["Jon Snow", "Cersei Lannister", "Daenerys Targaryen"],
    ["Theon Greyjoy", "Tyrion lannister", "Arya Stark"]));