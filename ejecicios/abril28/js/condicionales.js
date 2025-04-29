

let edad = parseInt(prompt('Indroduzca la edad'));

if (!isNaN(edad)){
    if (edad >= 18 && edad < 80){
        console.log('Es mayor de edad');
    } else if (edad >= 80) {
        console.log('Es mayor de edad y esta en la 3ra edad');
    } else {
        console.log('Es menor de edad');
    }
} else {
    alert('No es un numero!')
}