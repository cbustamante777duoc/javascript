let a = -2;

if (a >= 10) {
    console.log('a es mayor o igual a 10');
}else{
    console.log('a es menor a 10');
}

console.log('fin');

const hoy = new Date();
let dia = hoy.getDay();
console.log({dia});


//uso del if, else if y else
if (dia=== 0) {
    console.log('domingo');
}else if(dia===1){
    console.log('lunes');
}else if(dia===2){
    console.log('martes');
}else{
    console.log('otro dia de la semana');
}