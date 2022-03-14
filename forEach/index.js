const numeros = [3,5,2,8,9,6,4,1,1,0];

/*for (let item of numeros) { // para Arrays, el valor que hay en la posición
    console.log(item);
}*/

/**
 * Imprime los numeros en 'array' mayores que 'numero'
 * @param {number} num 
 * @param {array} array 
 */
function imprimeMayoresQue (num, array) {
    array.forEach(element => { // para Arrays
        if (element > num) {
            console.log(element);
        }
    });
}

imprimeMayoresQue(5,numeros)

/*const usuario = {
    name: "Daniel",
    age: 50
}

for (let key in usuario) {  // para objetos, devuelve la posición, el índice []
    console.log(key)
    console.log(usuario[key]);
}

for (let index = 0; index < array.length; index++) { // para todo
    const element = array[index];
    
}*/