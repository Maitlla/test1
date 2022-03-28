// Calculadora sencilla Javascript caso 3

const buttonSuma = document.querySelector('#sum');
const buttonResta = document.querySelector('#rest');
const buttonX = document.querySelector('#multi');
const buttonDivide = document.querySelector('#divi');
const buttonModulo = document.querySelector('#resto');

const buttonClear = document.querySelector('#clear');

const inputValor1 = document.querySelector('#valor1');
const inputValor2 = document.querySelector('#valor2');

const pResultado = document.querySelector('#resultado');

// Función suma + 1
function suma(event) {
    console.log("click en el botón +");
    pResultado.innerHTML = getValor1() + getValor2();

}
buttonSuma.addEventListener("click", suma);

function getValor2() {
    return Number(inputValor2.value); // Number() parsea un string y lo convierte a número
}

function getValor1() {
    return Number(inputValor1.value);
}

// Función resta 1
function resta(event) {
    console.log("click en el botón -");
    pResultado.innerHTML = getValor1() - getValor2();

}
buttonResta.addEventListener("click", resta);

// Función multiplica x 2
function multiplica(event) {
    console.log("click en el botón x");
    pResultado.innerHTML = getValor1() * getValor2();

}
buttonX.addEventListener("click", multiplica);

// Función divide
function divide(event) {
    console.log("click en el botón /");
    pResultado.innerHTML = getValor1() / getValor2();

}
buttonDivide.addEventListener("click", divide);

// Función módulo
function modulo(event) {    
    console.log("click en el botón %");
    pResultado.innerHTML = getValor1() % getValor2();
}
buttonModulo.addEventListener("click", modulo);

// Para poner los input en 0
function clearImput(elInput){
    elInput.value=0;
}
function clear(event) {
    console.log("click en el botón clear");
    let allImputs = document.querySelectorAll("input[type=text]");
    allImputs.forEach(element => {
        clearImput(element);
    });
    pResultado.innerHTML="";
}
buttonClear.addEventListener("click", clear);