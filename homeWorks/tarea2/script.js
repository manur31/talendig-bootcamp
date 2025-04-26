const resultado = document.querySelector('#resultado');
const push = document.querySelector('#push');
const unshift = document.querySelector('#unshift');
const pop = document.querySelector('#pop');
const shift = document.querySelector('#shift');
const reverse = document.querySelector('#reverse');

let miARRAY = [10, 20, 30, 40, 50];

mostrarArray();

function agregarInicio() {

    let dato = prompt('Agregue el dato deseado');
    miARRAY.unshift(dato);
    mostrarArray();

}

function agregarFinal() {

    let dato = prompt('Agregue el dato deseado');
    miARRAY.push(dato);
    mostrarArray();

}

function quitarInicio() {
    
    if (miARRAY.length == 0){
        alert('Tu array esta vacio')
    } else {
        miARRAY.shift();
    }
    mostrarArray();

}

function quitarFinal() {
    
    if (miARRAY.length == 0){
        alert('Tu array esta vacio')
    } else {
       miARRAY.pop(); 
    }
    mostrarArray();
}

unshift.addEventListener('click', agregarInicio);
push.addEventListener('click', agregarFinal);
shift.addEventListener('click', quitarInicio);
pop.addEventListener('click', quitarFinal)

reverse.addEventListener('click', () =>{
    miARRAY.reverse()
    mostrarArray()
})


function mostrarArray() {
    resultado.innerHTML = miARRAY.join(', ');
}


