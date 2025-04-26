const $input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', agregar);
 
function agregar() {
    const producto = $input.value

    const lista = document.querySelector('ul');
    const item = document.createElement('li')

    item.innerHTML = `<p>${producto}</p> <span>X</span>`

    item.querySelector('span').addEventListener('click', () => {
         item.remove();
    })

    lista.append(item);

    $input.value = '';
    $input.focus();
}

$input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        agregar();
    }
})

