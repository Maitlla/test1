// Contador Javascript caso 2

const buttonSuma = document.querySelector('#sum');
const inputSuma = document.querySelector('#suma');

const buttonResta = document.querySelector('#rest');
const inputResta = document.querySelector('#resta');

const buttonX = document.querySelector('#multi');
const inputX = document.querySelector('#multiplica');

const buttonDivide = document.querySelector('#divi');
const inputDivide = document.querySelector('#divide');

const buttonModulo = document.querySelector('#resto');
const inputModulo = document.querySelector('#modulo');

const buttonClear = document.querySelector('#clear');

// Función suma + 1
function suma(event) {
    console.log("click en el botón");
    let resultadoSuma = inputSuma.value;
    resultadoSuma++;
    inputSuma.value = resultadoSuma;

}
buttonSuma.addEventListener("click", suma);

// Función resta 1
function resta(event) {
    console.log("click en el botón");
    let resultadoResta = inputResta.value;
    resultadoResta = resultadoResta - 1;
    inputResta.value = resultadoResta;

}
buttonResta.addEventListener("click", resta);

// Función multiplica x 2
function multiplica(event) {
    console.log("click en el botón");
    let resultadoX = inputX.value;
    resultadoX = resultadoX * 2;
    inputX.value = resultadoX;

}
buttonX.addEventListener("click", multiplica);

// Función divide
function divide(event) {
    console.log("click en el botón");
    let resultadoDivide = inputDivide.value;
    resultadoDivide = resultadoDivide / 2;
    inputDivide.value = resultadoDivide;

}
buttonDivide.addEventListener("click", divide);

// Función módulo
function modulo(event) {
    console.log("click en el botón");
    let resultado = inputModulo.value;
    let resultadoModulo = resultado % 2; // Si da como resultado 0 es par, si da 1 es impar
    inputModulo.value = resultadoModulo;
    let x;
    if (resultadoModulo === 0) {
        console.log("Par");
        x = "par";
    } else {
        console.log("Impar");
        x = "impar";
    }
    // para pintar el código
    const p = document.createElement("p");
    p.innerText = `Valor de retorno del % es: ${resultadoModulo} es ${x}`;
    document.querySelector("#ElModulo").append(p);  

}
buttonModulo.addEventListener("click", modulo);

/*
// Función pone el input en 0
function clear (event) {
    console.log("click en el botón");
    let pongoACero = 0;
    inputSuma.value = pongoACero;
    buttonClear.value = inputSuma.value;
  }
  buttonClear.addEventListener("click", clear);
  */


// Para poner los input en 0
function clearImput(elInput){
    elInput.value=0;
}
function clear(event) {
    console.log("click en el botón clear");
    let allImputs = document.querySelectorAll("input[type=text]");
    //for(let i=0; i<allImputs.length; i++){
    //    clearImput(allImputs[i]);
    //}
    allImputs.forEach(element => {
        clearImput(element);
    });
}
buttonClear.addEventListener("click", clear);


