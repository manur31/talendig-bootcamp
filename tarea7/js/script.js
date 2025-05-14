const btnAgregar = document.querySelector('.btn-agregar');
const input = document.querySelector('.input');
const inputText = input.querySelector('input');
const checkAgregar = document.querySelector('.check-agregar');
const fechaActual = document.querySelector('.fecha');
const warning = document.querySelector('.warning');
const cancelar = document.querySelector('.cancelar');

// Mostrando el input

btnAgregar.addEventListener('click', () => {
    input.classList.toggle('active');
    inputText.focus();
});

// Cancelando la tarea 
cancelar.addEventListener('click', () => {
    input.classList.remove('active');
    inputText.value = '';
    warning.classList.add('hidden');
});

// Agregando tareas con el boton

checkAgregar.addEventListener('click', () => {
    if (inputText.value.trim() === '') {
        warning.classList.remove('hidden');
        return;
    }else {
        agregarTask();
        inputText.value = '';
        input.classList.remove('active');
        warning.classList.add('hidden');
    }
});

// Agregando tareas con Enter

inputText.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        if (inputText.value.trim() === '') {
            warning.classList.remove('hidden');
        }else {
            agregarTask();
            inputText.value = '';
            input.classList.remove('active');
            warning.classList.add('hidden');
        }
    }
});



// Funcion para agregar tareas

function agregarTask() {
    const task = inputText.value;

    const taskList = document.querySelector('.tasks-list');
    const taskItem = document.createElement('article');

    taskItem.classList.add('task');

    taskItem.innerHTML = `
        <section class="task-info">
            <span class="check">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"/></svg>
            </span>
            <span class="circle">
                <svg width="24" height="24"><use href="assets/sprite.svg#icon-circle"/></svg>
            </span>
            <section class="task-text">
                <p class="task-title">${task}</p>
                <p class="time">${horas}:${minutos} ${ampm}</p>
                <span class="line"></span>
            </section>
        </section>  
        <span class="btn-eliminar">
            <svg width="24" height="24"><use href="assets/sprite.svg#icon-trash-2"/></svg>
        </span>
    `;

    // Eliminando tareas

    const btnEliminar = taskItem.querySelector('.btn-eliminar');
    btnEliminar.addEventListener('click', () => {
        taskItem.remove();
        updateTasksCountDelete(taskList);
    });

    // Marcando tareas

    const check = taskItem.querySelector('.task-info');
    check.addEventListener('click', () => {
        check.classList.toggle('active');
        updateTasksCountDelete(taskList);
    });


    taskList.appendChild(taskItem);

    updateTasksCount(taskList);
}

// Contador de tareas
const tasksCount = document.querySelector('.tasks-count');

function updateTasksCount(task) {
    let countTask = task.children.length;
    tasksCount.textContent = `${countTask} tasks`;
}

function updateTasksCountDelete(task) {
    let countTask = task.children.length;
    tasksCount.textContent = `${countTask} tasks`;
}


// Agregando hora
const fecha = new Date();

let horas = fecha.getHours();
let minutos = fecha.getMinutes();
let ampm = horas >= 12 ? 'pm' : 'am';


// Formateando la hora a 12
horas = horas % 12; 
horas = horas ? horas : 12;
minutos = minutos < 10 ? '0' + minutos : minutos;

// Agregando fecha

const diaSemana = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const mes = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const diaActual = fecha.getDay();
const diaSemanaActual = fecha.getDate();
const mesActual = fecha.getMonth();

fechaActual.textContent = `${diaSemana[diaActual]}, ${diaSemanaActual} ${mes[mesActual]}`;