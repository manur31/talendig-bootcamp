const valor1 = document.getElementById('valor1');
const valor2 = document.getElementById('valor2');
const resultado = document.getElementById('resultado');
const error = document.getElementById('error');

const sumar = document.getElementById('sumar');
const restar = document.getElementById('restar');
const multiplicar = document.getElementById('multiplicar');
const dividir = document.getElementById('dividir');


sumar.addEventListener('click', (e) => {
    e.preventDefault();
    const num1 = parseInt(valor1.value);
    const num2 = parseInt(valor2.value);

    valor1.style.borderColor = 'transparent';
    valor2.style.borderColor = 'transparent';

    resultado.innerHTML = num1 + num2;
})

restar.addEventListener('click', (e) => {
    e.preventDefault();
    const num1 = parseInt(valor1.value);
    const num2 = parseInt(valor2.value);

    valor1.style.borderColor = 'transparent';
    valor2.style.borderColor = 'transparent';

    resultado.innerHTML = num1 - num2;
})

multiplicar.addEventListener('click', (e) => {
    e.preventDefault();
    const num1 = parseInt(valor1.value);
    const num2 = parseInt(valor2.value);

    valor1.style.borderColor = 'transparent';
    valor2.style.borderColor = 'transparent';

    if (num2 === 0){
        error.innerHTML = 'No se puede multiplicar por 0';
        valor1.style.borderColor = 'transparent';
        valor2.style.borderColor = 'red';
    }else{
        error.innerHTML = '';
        valor2.style.borderColor = 'transparent';
        valor1.style.borderColor = 'transparent';
        resultado.innerHTML = num1 * num2;
    }
})

dividir.addEventListener('click', (e) => {
    e.preventDefault()

    const num1 = parseInt(valor1.value);
    const num2 = parseInt(valor2.value);

    valor1.style.borderColor = 'transparent';
    valor2.style.borderColor = 'transparent';

    if (num2 === 0){
        error.innerHTML = 'No se puede dividir por 0';
        valor1.style.borderColor = 'transparent';
        valor2.style.borderColor = 'red';
    }else{
        error.innerHTML = '';
        valor1.style.borderColor = 'transparent';
        valor2.style.borderColor = 'transparent';
        resultado.innerHTML = num1 / num2;
    }
})




