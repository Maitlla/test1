//Ejercicios examen Javascript 21/03/2022

/*
let x = 0;
for (let y = 0; y < 3; y++) { //0,1,2
    x++;
}//x=3
console.log(y); // error y no ha sido definido
*/

/*
const preguntas = {};
preguntas["primera"] = "que formas tenemos...";
//console.log(preguntas); // {primera: 'que formas tenemos...'}
*/

/*
const preguntas = [];
preguntas[0] = "que formas tenemos...";
//console.log(preguntas); //['que formas tenemos...']
*/

/*
let y = 0;
function sumaUno(x) {
    x = x + 1;
    return x;
}
y = sumaUno(y);
console.log(x); */ //undefined


/*
const valores = [4,9,2,1,3,8,7];
for (let x of valores) {//4,9,2,1,3,8,7
    if(x > 2) {
        console.log(x);
    }
}

4
9
3
8
7
*/


/*
for (let x = 0; x < 2; x++) { //0,1        2 veces
    for (let y = 0; y < 3; y++) { //0,1,2     3 veces
        console.log("pong");
    }
}

pong
pong
pong
pong
pong
pong
*/


/*
const valores = [4,9,2,1,3,8,7];
const resultado = [];//2,1,3
for (let x = 2; x <=4; x++) {
    const y = valores[x];
    resultado.push(y);
}
console.log(resultado); //2,1,3
*/

/*
const opciones = {primera: 33, segunda: 21, tercero: 48};
let var1 = 99;
let var2 = 1;
if (var1 > var2) { // entra dentro
    if (var1 % 2 !==0 && var2 % 2 ===0) { // (false) no entra
        console.log(opciones.primera); 
    }else if(var2 > var1) { //no entro
        if(var1% 2 !==0 && var2 % 2 !==0) {
            console.log(opciones.segunda);
        }
    }
}
*/
// como no pasa por un console.log( no pinta nada)


/*
const posicion = "segundo";
const x = valores.segundo === valores[posicion];
console.log(x);
*/

/*
const valores = {primero: 33, segundo: 21, tercero: 48};
const posicion = "segundo";
const x = valores.segundo === valores[posicion];
console.log(x); //true 
*/


/*
const valores = {primero: 33, segundo: 21, tercero: 48};
const x = valores.segundo; 
console.log(x); //21
*/

/*
const valores = [4,9,2,1,3,8,7];
const x = valores[6];
console.log(x);
*/


