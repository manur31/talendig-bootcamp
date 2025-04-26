let miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Funcion para mostrar numeros impares de un array con .forEach
const numerosImpares = (array = []) => {
    array.forEach(element => {
        if (element % 2 !== 0){
            console.log(element);
        }
    });
}

numerosImpares(miArray);

// Funcion para mostrar numeros impares de un array con .filter
const numerosPares = (array = []) => {
    console.log(array.filter((element) => element % 2 === 0));
}

numerosPares(miArray);