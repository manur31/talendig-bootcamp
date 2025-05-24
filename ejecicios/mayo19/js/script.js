

// const x = fetch('https://dog.ceo/api/breeds/image/random')
//     .then(response => response.json())
//     .then(data => mostrarImagen(data.message));


//     const mostrarImagen = (url) => {
//         const img = document.querySelector('img');
//         img.src = url;
//     }


const mostarFoto = async () => {

    try {
        const img = document.querySelector('img');
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        img.src = data.message;
    } catch (error) {
        console.log(error);
    }
}

mostarFoto();
