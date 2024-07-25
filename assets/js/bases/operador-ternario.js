/**
  dias de semana abrimos a las 11,
  pero los fines de semana a las 9
  */
 
  //entrar a un sitio web, para consultar si está abierto hoy

  const dia = 1;
  const horaActual = 10;

  let horaApertura;
  let mensaje; //esta abrierto, cerrado, hoy abrimos a las xx

//   if ([0,6].includes(dia)){
//     console.log('Fin de semana');
//     horaApertura = 9;
//   } else{
//     console.log('Dia de semana');
//     horaApertura = 11;
//   }

//despues de signo de interrogacion colocamos lo que queremos haer
//si la condicion se cumple, despues de los dos pntos iría el else
horaApertura = ([0,6].includes(dia)) ? 9 : 11;

//   if( horaActual >= horaApertura){
//     mensaje = 'Esta abierto';
//   }  else{
//     mensaje= `Esta cerrado, hoy abrimos a las ${horaApertura}`;
//   }

mensaje = ( horaActual >= horaApertura) ? 'esta abierto' : 'esta cerrado';

console.log({horaApertura, mensaje})