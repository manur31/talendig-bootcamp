// Elementos
const valor1 = document.getElementById('valor1');
const valor2 = document.getElementById('valor2');
const resultado = document.getElementById('resultado');
const error = document.getElementById('error');

// Botones
const sumar = document.getElementById('sumar');
const restar = document.getElementById('restar');
const multiplicar = document.getElementById('multiplicar');
const dividir = document.getElementById('dividir');

validar(valor1)
validar(valor2)

// Eventos
sumar.addEventListener('click', (e) => {
    e.preventDefault();
    
    const num1 = parseInt(valor1.value);
    const num2 = parseInt(valor2.value); 
    validarInputs(num1, num2);

    reset();

    resultado.innerHTML = num1 + num2;
})

restar.addEventListener('click', (e) => {
    e.preventDefault();

    const num1 = parseInt(valor1.value);
    const num2 = parseInt(valor2.value);
    validarInputs(num1, num2);

    reset();

    resultado.innerHTML = num1 - num2;
})

multiplicar.addEventListener('click', (e) => {
    e.preventDefault();

    const num1 = parseInt(valor1.value);
    const num2 = parseInt(valor2.value);
    validarInputs(num1, num2);

    reset();

    validarCero(num2, 'multiplicar', num1 * num2);
})

dividir.addEventListener('click', (e) => {
    e.preventDefault()

    const num1 = parseInt(valor1.value);
    const num2 = parseInt(valor2.value);
    validarInputs(num1, num2);

    reset();

    validarCero(num2, 'dividir', num1 / num2);
})

// Validaciones
function validar(valor) {
    valor.addEventListener('keydown', () => {
        if (isNaN(valor.value) || valor.value === '') {
            valor.style.borderColor = 'red';
            error.innerHTML = 'Debes agregar un numero';
        } else if (!isNaN(valor.value)){
            valor.style.borderColor = 'green';
            error.innerHTML = '';
        }
    })
}

function validarCero(num, operador, operacion) {
    if (num === 0){
        error.innerHTML = `No se puede ${operador} por 0`;
        valor1.style.borderColor = 'transparent';
        valor2.style.borderColor = 'red';
    }else{
        error.innerHTML = '';
        valor1.style.borderColor = 'transparent';
        valor2.style.borderColor = 'transparent';
        resultado.innerHTML = operacion;
    }
}

function validarInputs(num1, num2) {
    if (num1 === '' || num2 === '') {
        error.innerHTML = 'Debes agregar un numero';
    }
}

// Reset
function reset() {
    valor1.style.borderColor = 'transparent';
    valor2.style.borderColor = 'transparent';
    error.innerHTML = '';
    resultado.innerHTML = '';
}

