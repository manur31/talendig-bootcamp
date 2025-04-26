let miArray = [];


function recorrerArray(arrayDado) {
  if (arrayDado.length <= 5 && arrayDado.length != 0) {
    for (let i = 0; arrayDado.length > i; i++){
      console.log(arrayDado[i]);
    }
  } else if (arrayDado.length == 0){
    console.log('Este array no es valido');
  } else {
    arrayDado.forEach((value) => console.log(value));
  }
}

recorrerArray(miArray);
