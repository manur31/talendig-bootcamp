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
    // Agregando tareas con Enter
    canUseEnter();
    input.classList.contains('active') ? inputText.focus() : inputText.blur();
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
        showWarning();
        return;
    }else {
        agregarTask();
        inputText.value = '';
        input.classList.remove('active');
        warning.classList.add('hidden');
    }
});


// Funcion para agregar tareas

function agregarTask() {
    const task = {
        taskText: inputText.value,
    };

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
                <p class="task-title">${task.taskText}</p>
                <p class="time"></p>
                <span class="line"></span>
            </section>
        </section>  
        <span class="btn-eliminar">
            <svg width="24" height="24"><use href="assets/sprite.svg#icon-trash-2"/></svg>
        </span>
    `;

    // Eliminando tareas
    deleteTask(taskItem);

    taskList.appendChild(taskItem);

    updateTasksCount(taskList);

    // Marcando tareas
    markTask(taskItem);

    // Guardando tareas

    let tasks = (JSON.parse(localStorage.getItem('tasks')) || []);
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    showTime(taskItem);

}

// Contador de tareas
const tasksCount = document.querySelector('.tasks-count');

function deleteTask(e) {
    const btnEliminar = e.querySelector('.btn-eliminar');
    btnEliminar.addEventListener('click', () => {
        e.remove();
        let tasks = (JSON.parse(localStorage.getItem('tasks')) || []);
        tasks = tasks.filter(task => task.taskText !== e.querySelector('.task-title').textContent);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        updateTasksCount(taskList, 1);
    });
}

// Marcando tareas

function markTask(e) {
    const taskInfo = e.querySelector('.task-info');
    taskInfo.addEventListener('click', () => {
        taskInfo.classList.toggle('active');
        updateTasksCount(taskList);
    });
}



function updateTasksCount(task, pending = 0) {
    let countTask = task.children.length;
    tasksCount.textContent = `${countTask - pending} task(s) pending(s)`;
}


function showWarning() {
    input.classList.contains('active') ? warning.classList.remove('hidden') : null;
    setTimeout(() => {
        warning.classList.add('hidden');
        inputText.focus();
    }, 3000);
}

// Agregando tareas con Enter

function enter(e) {
    if (e.key === 'Enter') {
        if (inputText.value.trim() === '') {
            showWarning();
        }else {
            agregarTask();
            input.classList.remove('active');
            input.classList.contains('active') ? inputText.focus() : inputText.blur();
            warning.classList.add('hidden');
            inputText.value = '';
        }
    }
}

// Validando que se pueda usar Enter

function canUseEnter() {
    if (input.classList.contains('active')) {
        inputText.addEventListener('keydown', enter);
    }
}


// Agregando hora
function showTime(e) {
    const fecha = new Date();
        let horas = fecha.getHours();
        let minutos = fecha.getMinutes();
        let ampm = horas >= 12 ? 'pm' : 'am';

        // Formateando la hora a 12
        horas = horas % 12; 
        horas = horas ? horas : 12;
        minutos = minutos < 10 ? '0' + minutos : minutos;

        const timeCurrent = `${horas}:${minutos} ${ampm}`;

        const time = e.querySelector('.time');
        time.textContent = timeCurrent;
} 

// Mostrando tareas guardadas

function showTasks() {
    const taskList = document.querySelector('.tasks-list');
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
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
                    <p class="task-title">${task.taskText}</p>
                    <p class="time"></p>
                    <span class="line"></span>
                </section>
            </section>  
            <span class="btn-eliminar">
                <svg width="24" height="24"><use href="assets/sprite.svg#icon-trash-2"/></svg>
            </span>
        `;

        deleteTask(taskItem);
        markTask(taskItem);
        taskList.appendChild(taskItem);
        updateTasksCount(taskList);
        showTime(taskItem);
    });
}



// Agregando fecha
const dia = new Date();

const diaSemana = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const mes = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const diaActual = dia.getDay();
const diaSemanaActual = dia.getDate();
const mesActual = dia.getMonth();

fechaActual.textContent = `${diaSemana[diaActual]}, ${diaSemanaActual} ${mes[mesActual]}`;


showTasks();
