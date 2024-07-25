const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let i = 0;
while( i < carros.length ){    
    if (i === 1){
        i++;
        continue;
    }
    console.log(carros[i]);
    i++;
}