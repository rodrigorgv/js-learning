const rod = {
    nombre: 'rodrigo',
    edad: 30,
    imprimir(){
        console.log(`nombre: ${this.nombre} - edad: ${this.edad}` )
    }
}

const pedro = {
    nombre: 'pedro',
    edad: 20
}

//rod.imprimir();

//el Upper Camel Case es un indicativo para una función que sirve para instancia
function Persona(nombre, edad){
    console.log('se ejecutó esta linea')
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function(){
        console.log(`nombre: ${this.nombre} - edad: ${this.edad}` )
    }
}

const maria = new Persona('maría', 18)
const melissa = new Persona('melissa', 35)
console.log(maria)
maria.imprimir();
melissa.imprimir();