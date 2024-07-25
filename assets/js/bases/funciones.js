function saludar(nombre){
    // console.log('hola ' + nombre);
    // console.log(arguments)
    return [1,2,3,4,5];

    console.log('no se ejecuta')
}

// esta es una funcion anonima
//ya que se asigna como constante, no se pude redefinir
const saludar2 = function(nombre){
    console.log("hola2 " + nombre);
};


//funciones flecha
//cuando mandamos un solo argunento, no es necesario el paren
const saludarFlecha = (nombre)=>{
    console.log('hola flecha ' + nombre);
}



const retornoSaludar = saludar("rodrigo",40,true,'Costa Rica');
// console.log(retornoSaludar);
// saludarFlecha('rodrigo');

function sumar(a,b){
    return a+b;
}

const sumar2 = (a,b) =>{
    return a+b;
}

const sumar3 = (a,b) => a+b;


console.log(sumar(1,2));
console.log(sumar2(1,2));
console.log(sumar3(2,2));



function getAleatorio(){
    return Math.random();
}


const  getAleatorio2 = () => Math.random();


console.log(getAleatorio())
console.log(getAleatorio2())