
function crearPersona(nombre,apellido){
    return {
        nombre: nombre,
        apellido, apellido,
    }
}

//en ES6 ya no es necesario colocar el nombre de la propiedad
//si es el mismo que la variable
//function crearPersona2(nombre,apellido){
//    return { nombre, apellido,
//    }
//}

const crearPersona2 = (nombre,apellido) => ({nombre ,apellido});




const persona = crearPersona('Rodrigo','Gonzalez');
console.log(persona);
const persona2 = crearPersona2('Rodrigo','Gonzalez');
console.log(persona2);

function imprimeArgumentos(){
    console.log(arguments);
}

//para las funciones flecha no se manejan argumetos
//pero podemos añadirlos de la siguiente manera
//**ojo ojo** despues del args, no pueden haber más argumentos 
const imprimeArgumentos2 = (edad,...args) =>{
    // console.log(edad,args);
    return args;
}

imprimeArgumentos(10,true,false,'Rodrigo','Hola');

//podemos encapsular las respuestas de la funcion en elementos "rotos"
//del array
 const [casado,vivo,nombre,saludo] = imprimeArgumentos2(10,true,false,'Rodrigo','Hola');
    console.log({casado,vivo,nombre,saludo});

const {nombre: nuevoNombre} = crearPersona('Rodrigo','Gonzalez');
//colocamos 2 puntos para especificar el nuevo nombre de la variable  
console.log({nuevoNombre});


//destructuracion de argumentos 
//los objetos literales son como diccionarios 
//los objetos literales son objetos que tienen pares de valores
const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad:40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
}


const imprimePropiedades = ({nombre,codeName,vivo,edad=15,trajes}) => {
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes}); 
}
imprimePropiedades(tony);