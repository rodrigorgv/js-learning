const regresaTrue = () =>{
    console.log('Regresa True');
    return true;
}

const regresaFalse = () =>{
    console.log('Regresa False');
    return false;
}

console.warn('Not o la negación');
console.log(true);
console.log(!true);
console.log(!regresaFalse());

console.log('==================');
console.warn('And')
console.log( regresaFalse() && regresaTrue()); //no ejecuta regresa true porque la primera respuesta es false
console.log('-00-0-0-0-0-0')
console.log( regresaTrue() && regresaFalse());//ejecuta ambas funciones esperando un true

console.log('validacion 2');
regresaTrue() && regresaFalse();

console.warn('OR');



console.warn
