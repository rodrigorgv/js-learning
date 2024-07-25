const elMayor = (a,b) => (a > b) ? a : b;

const tieneMembresia = (miembro) => (miembro) ? '2 dolares' : '10 dolares';

console.log(elMayor(10,15));
console.log(tieneMembresia(false));

const amigo = true;
const amigosArr = ['peter', 'Tony', 'Dr. Strange', amigo ? 'Thor': 'Loki', (() => 'nick fury')()]; 
console.log(amigosArr);

const nota = 70;
const grado = nota >= 95 ? 'a+' : 
              nota >= 90 ? 'a'  :
              nota >= 85 ? 'b+' :
              nota >= 80 ? 'b'  :
              nota >= 75 ? 'c+' :
              nota >= 70 ? 'c'  :
              nota >= 70 ? 'c'  : 'f';

console.log({nota,grado})              