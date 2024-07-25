let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo:', juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];
console.log({primero,ultimo});


juegos.forEach((elemento, indice, arr) =>{
    console.log({elemento,indice,arr})
});

let nuevaLongitud = juegos.push('F-zero');
console.log({nuevaLongitud, juegos});

juegos.unshift('FIre Emblem');
console.log({nuevaLongitud, juegos});

let juegoBorrado = juegos.pop()
console.log({juegoBorrado});

console.log(juegos);

let pos = 1;
let juegosBorrados = juegos.splice(pos,2);
console.log({juegosBorrados});

let metroidindex = juegos.indexOf('Metroid'); //CaseSensitive
console.log(metroidindex);