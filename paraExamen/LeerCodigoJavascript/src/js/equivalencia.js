

// ¿Cual es el valor de x tras ejecutar el siguiente código?
let y = 0;
function suma (y) {
  y = y + 1;
  return y;
}
suma (y);
console.log(x);

// ¿Cual es el valor de x tras ejecutar el siguiente código?
let x = 0;
function suma (x) {
  x = x + 1;
  return x;
}
x = suma (x);
console.log(x);
/*

// El método sort() ordena los elementos de un Array y lo devuelve ordenado 
const numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  // para que lo ordene correctamente de manera ascendente
  // si a es menor que b return -1
  // si a es mayor que b return 1
  // si a es igual que b return 0
  return a - b; 
});
console.log(numbers);

// Ejemplo método sort() con función anónima normal
const numbers1 = [ 40, 1, 5, 200 ];
numbers1.sort(function(a,b){return a - b;});
console.log(numbers1);  // [ 1, 5, 40, 200 ]

// Ejemplo método sort() con función flecha
const numbers2 = [ 40, 1, 5, 200 ];
numbers2.sort((a,b)=>a-b);  
console.log(numbers2); // [ 1, 5, 40, 200 ]


const obj = {
    nombre: "Fred",
    edad: 42,
    id: 1
  }
  
  //Los dos fragmentos de código son equivalentes
  const { nombre } = obj;
  console.log("nombre", nombre);
  
  //asignación de múltiples variables a la vez
  const { edad, id } = obj;
  console.log("edad", edad);
  console.log("id", id);
  
  //usando diferentes nombres para las propiedades
  const { nombre: personNombre } = obj;
  console.log("personNombre", personNombre);


  //funciones de ES6 destructuring assignment
  const obj = {
    email: "hello@gmail.com",
    title: "Hello world"
}

const email = obj.email;
const title = obj.title;

const { email,title } = obj;


//otro ejemplo
const obj = {
    prop1: 1,
    prop2: 2
  }
  
  // previamente se tendría que hacer algo como esto:
  const firstProp = obj.prop1;
  const secondProp = obj.prop2;
  console.log(firstProp, secondProp);
  // etc.
  
  // sin embargo, ahora se puede hacer esto en la misma línea:
  const {prop1, prop2} = obj;
  console.log(prop1, prop2);

*/


// filter

const array7 = [1,22,3,44];
const array7out = array7.filter(
    (item) => {
        return item > 10;
    }
);
console.log(array7);
console.log(array7out);



// map

/*
1 2 3

x2

2 4 6
*/
function porDos(x) {
    return x * 2;
  }
const array1 = [1,2,3];
const array1out = array1.map(
    (item) => {
        return item * 2;
    }
);
const array1out2 = array1.map(porDos);
console.log(array1);
console.log(array1out);
console.log(array1out2);

/*
"i1" "i2" "i3"

de item a <li>

<li>i1</li>     <li>i2</li>    <li>i3</li>
*/
function crearLi(texto){
    const li = document.createElement("li");
    li.innerText  = texto;
    return li;
}
crearLi("i1")
const arrayTexto = ["i1", "i2", "i3"];
const arrayTextoOut = arrayTexto.map(
    (texto) => {
        const li = document.createElement("li");
        li.innerText  = texto;
        return li;
    }
);
const arrayTextoOut2 = arrayTexto.map(crearLi);
console.log(arrayTexto);
console.log(arrayTextoOut);
console.log(arrayTextoOut2);



/*
Función flecha
numbers.sort((a,b) => {return a-b});
Función anónima
numbers.sort(function(a,b) {return a-b});

function primera(param1){
    
}
function segunda(param1){

}
primera(segunda); // Pasas la función
primera(segunda());// Pasas el resultado de ejecutar la función
*/




/*

// Ejercicio para probar
// La función comparar me sirve para ordenar de manera ascendente cuando se llama a la función .sort()
// El Array numbers llama a la función .sort() pasandole como argumento la función comparar previamente creada.
// En la posición [0] del Array numbers esta el número menor

const numbers = [11, 9, 13, 12] 
function comparar(a, b) {
    return a - b;
}
console.log(numbers.sort(comparar));
console.log(numbers[0]);  


/*
EJEMPLO DE PRUEBA

const arr = ['80', '9', '700', 40, 1, 5, 200];
// función para comparar
function comparar(a, b) { 
    // a menos b, ordena de menos a más, útil cuando se llama a la función .sort que no ordena normal, b menos a ordena al revés
    return a - b; 
}
// Array arr llama a la función sort() y le pasa como argumento la función comparar
arr.sort(comparar);
console.log(arr);
console.log('original:', arr.join()); // original: 1,5,9,40,80,200,700
// otra manera de hacerlo directamente en el console.log 
console.log('ordenado con función:', arr.sort(comparar));   */
