let a = 15;


if (a >= 10) { //pueden aver excepciones como undefined, null, asignaciones
    console.log("A es mayor a 10");
} else {
    console.log('A es menor a 10');
}

console.log("fin del programa");

const hoy = new Date();
let dia = hoy.getDay();
console.log({ dia });

if (dia === 0) {
    console.log('domingo');
} else if(dia === 1){
    console.log('Lunes');
    // if (dia === 1) {
    //     console.log('lunes');
    // }
    // else {
    //     console.log('no es lunes ni domingo');
    // }
} else if(dia === 2){
    console.log('Martes');
} else{
    console.log('No es lunes,martes ni domingo');
}

// Sin usar If Else, o Switch, unicamente objetos
dia = 1;
//dia de la semana

const diaNumero = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado'
}

console.log(diaNumero[dia] || 'Dia no valido');
