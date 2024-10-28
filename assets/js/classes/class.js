class Persona {
    //propiedad estatica
    static _conteo = 0
    //metodo estatico
    static get conteo(){
        return Persona._conteo + ' instancias';
    }

    static mensaje(){
        console.log(this.nombre);//da undefined
        console.log('Este es un metodo estatico');
    }
    //por defecto todas las clases poseen 'use strict'
    //es decir que no reconoce los valores fuera de la instancia
    nombre= '';
    codigo= '';
    frase= '';
    comida= '';
    //se va a ejecutar en el momento que se crea una instancia de persona
    //el constructor siempre retorna la instancia del objeto aunque esté undefined
    constructor(nombre= 'Sin nombre', codigo='Sin codigo', frase='Sin frase'){
        if(!nombre) throw Error('necesitamos el nombre')
        this.codigo = codigo
        this.nombre = nombre
        this.frase = frase
        Persona._conteo++;
    }

    //SETTERS Y GETTERS //es como un metodo. usualmente solo recibe un metodo
    //los sets no pueden tener el mismo nombre que la popiedad a establecer
    set setComidaFavorita(comida){
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita(){
        return `la comida favorita de ${this.nombre} es ${this.comida}`
    }

    quiensoy(){
        console.log(`soy ${this.nombre} y mi identidad es: ${this.codigo}`);
    }

    miFrase(){
        this.quiensoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }


}





//para crear una instancia de la clase hacemos esto
const spiderman = new Persona('Peter Parker', 'SpiderMan', 'Test SpiderMan');
const ironman = new Persona('Tony Stark', 'ironman', 'Yo soy Ironman');
//console.log(ironman);

//spiderman.quiensoy();
//como es una propiedad y no un metodo, no se deben de usar parentesis 
spiderman.setComidaFavorita =  'El pie de cereza'
console.log(spiderman.getComidaFavorita);
console.log(spiderman);
console.log('conteo estatico ' , Persona._conteo);
//este es el get
console.log(Persona.conteo);
Persona.mensaje();


//PROPIEDAD ESTATICA EXTERNA
Persona.propiedadExterna = 'hola mundo';
console.log(Persona.propiedadExterna);
console.log(Persona);