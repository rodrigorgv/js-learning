const heroes = ['Batman', 'Supernan', 'Mujer maravilla', 'Aquaman'];

console.warn('for tradicional');

for(let x = 0; x<heroes.length;x++){
    console.log(heroes[x]);
}
console.warn('for in');
for (let x in heroes){
    console.log(heroes[x]);
}


console.warn('for of');
for (let hero of heroes){
    console.log(hero);
}