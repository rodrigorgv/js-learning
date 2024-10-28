class Singleton{
    static instancia;
    //esta será la propiedad que se manejará global
    nombre = '';

    constructor(nombre=''){
        //por qué doble negación?
        //a= undefined
        //a   es undefined
        //!a  es falso
        //!!a es verdadero
        if(!!Singleton.instancia){
            return Singleton.instancia;
        }
        
        
        Singleton.instancia = this;
        this.nombre = nombre;
    }
}

const instancia1 = new Singleton('ironman');
const instancia2 = new Singleton('spiderman');
const instancia3 = new Singleton('batman');
console.log(`nombre en la instancia 1 es: ${instancia1.nombre}`);
console.log(`nombre en la instancia 2 es: ${instancia2.nombre}`);
console.log(`nombre en la instancia 3 es: ${instancia3.nombre}`);