// Contador Javascript caso 1

const buttonSuma = document.querySelector('#sum');
const inputSuma = document.querySelector('#suma');

const buttonClear = document.querySelector('#clear');

// Función suma + 1
function suma (event) {
    console.log("click en el botón");
    let resultadoSuma = inputSuma.value;
    resultadoSuma++;
    inputSuma.value = resultadoSuma;

}
buttonSuma.addEventListener("click", suma);

// Función pone el input en 0
function clear (event) {
    console.log("click en el botón");
    let pongoACero = 0;
    inputSuma.value = pongoACero;
    buttonClear.value = inputSuma.value;
  }
  buttonClear.addEventListener("click", clear);