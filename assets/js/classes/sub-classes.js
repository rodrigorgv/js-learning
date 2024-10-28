class Persona {
    static _conteo = 0
    static get conteo(){
        return Persona._conteo + ' instancias';
    }

    static mensaje(){
        console.log(this.nombre);//da undefined
        console.log('Este es un metodo estatico');
    }

    nombre= '';
    codigo= '';
    frase= '';
    comida= '';

    constructor(nombre= 'Sin nombre', codigo='Sin codigo', frase='Sin frase'){
        if(!nombre) throw Error('necesitamos el nombre')
        this.codigo = codigo
        this.nombre = nombre
        this.frase = frase
        Persona._conteo++;
    }

    set setComidaFavorita(comida){
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita(){
        return `la comida favorita de ${this.nombre} es ${this.comida}`
    }

    quiensoy(){
        console.log(`sooy ${this.nombre} y mi identidad es: ${this.codigo}`);
    }

    miFrase(){
        this.quiensoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}

class Heroe extends Persona{
    clan = 'sin clan';
    //debemos de llamar al constructor de la clase padre (PERSONA), sino da error
    constructor(nombre, codigo, frase){
        super(nombre, codigo, frase);
        this.clan = 'Los Avengers';
    };

    quiensoy(){
        console.log(`soy ${this.nombre}, ${this.clan}`);
        super.quiensoy();
    }
}

const spiderman = new Heroe('Peter Parker', 'SpiderMan', 'Test SpiderMan');
//const spiderman = new Heroe();
console.log(spiderman);
spiderman.quiensoy();

