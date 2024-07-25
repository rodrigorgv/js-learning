//los objetos literales son como diccionarios 
//los objetos literales son objetos que tienen pares de valores
const personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords:{
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula' : 'infinity war',
}

console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje.edad);
console.log('coors', personaje.coords);
console.log('Latitud', personaje.coords.lat);

//numero de trajes que tiene ironman
console.log('# de trajes de ironman: ', personaje.trajes.length);
//ultimo traje
console.log('Ultimo traje', personaje.trajes[personaje.trajes.length -1]);

const x = 'vivo'
console.log('Vivo', personaje[x]);

//ultima pelicula
console.log('ultima pelicula',  personaje["ultima-pelicula"])

//MAS DETALLES SOBRE OBJETOS LITERALES
//--borra el elemento del objeto
delete personaje.edad;
console.log(personaje);

//--para crear un elemento del objeto de manera tempporal 
personaje.casado = true;

//--convierte todo en un array
const entriesPares = Object.entries(personaje);
console.log(entriesPares)

console.log(personaje);
// object.freeze, nos sive para bloquear las reasignaciones dentro del objeto inicial
Object.freeze(personaje);
personaje.dinero = 100000;
personaje.casado = false;
console.log(personaje);
// nos sirve para desplegar el nombre de las propiedades en formato array 
const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log({propiedades});
console.log({valores});
