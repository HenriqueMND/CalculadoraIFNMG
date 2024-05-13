// Selecionar elementos do DOM
let num1Input = document.getElementById("num1");
let num2Input = document.getElementById("num2");
let addButton = document.getElementById("addButton");
let resultSpan = document.getElementById("result");

// Função para somar

function add() {
    let num1 = parseFloat(num1Input.value);
    let num2 = parseFloat(num2Input.value);

    if (!isNaN(num1) && !isNaN(num2)) {
        let result = num1 + num2;
        resultSpan.textContent = result;
    } else {
        resultSpan.textContent = "Entradas Inválidas";
    }
}

addButton.addEventListener("click", add);

// função para subtrair

function subtrair() {
    let num1 = parseFloat(num1Input.value);
    let num2 = parseFloat(num2Input.value);

    if (!isNaN(num1) && !isNaN(num2)) {
        let result = num1 - num2;
        resultSpan.textContent = result;
    } else {
        resultSpan.textContent = "Entradas Inválidas";
    }
}

subtractButton.addEventListener("click", subtrair);


// função para multiplcar 

function multiplicar() {
    let num1 = parseFloat(num1Input.value);
    let num2 = parseFloat(num2Input.value);

    if (!isNaN(num1) && !isNaN(num2)) {
        let result = num1 * num2;
        resultSpan.textContent = result;
    } else {
        resultSpan.textContent = "Entradas Inválidas";
    }
}

multiplyButton.addEventListener("click", multiplicar);

// função dividir

function dividir() {
    let num1 = parseFloat(num1Input.value);
    let num2 = parseFloat(num2Input.value);

    if (!isNaN(num1) && !isNaN(num2)) {
        let result = num1 / num2;
        resultSpan.textContent = result;
    } else {
        resultSpan.textContent = "Entradas Inválidas";
    }
}

divideButton.addEventListener("click", dividir);


