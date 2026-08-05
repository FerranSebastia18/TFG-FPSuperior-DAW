// Variable para mantener el índice actual de la imagen mostrada
let indiceActual = 0;

// Array con URLs de imágenes para el slider
const imagenes = [
    'https://l.icdbcdn.com/oh/ae0fedff-9c53-40f2-b97e-15ad0688d6ac.jpg?w=1920', 
    'https://l.icdbcdn.com/oh/6ff7c482-2c5e-4957-9c91-22aefaec8f33.jpg?w=1920', 
    'https://l.icdbcdn.com/oh/76a3cd7e-d862-4fa0-b358-d4db1a6b39d8.png?w=1920', 
    'https://l.icdbcdn.com/oh/faab0769-c375-4004-987d-2bdc89c1e145.jpg?w=1920', 
    'https://l.icdbcdn.com/oh/3ba9b214-976c-40ac-a790-276726d570fd.png?w=1920', 
    'https://l.icdbcdn.com/oh/7e0d1aea-9215-4d9c-bebd-75529c303e15.jpg?w=1920', 
    'https://l.icdbcdn.com/oh/01510b0e-5920-447b-a1a3-e98ef4c289d5.jpg?w=1920', 
    'https://l.icdbcdn.com/oh/e0efc929-913e-456a-bbca-6edacd83e6e0.jpg?w=1920', 
    'https://l.icdbcdn.com/oh/eecd2438-6b03-474c-9ff2-41cf5d88adc5.jpg?w=1920', 
    'https://l.icdbcdn.com/oh/7b3db64a-2297-463b-ad6b-1c589c6ecc40.jpg?w=1920', 
    'https://l.icdbcdn.com/oh/57a3fd4d-3fe9-4a94-8274-b9cb71d1478a.jpg?w=1920', 
    'https://l.icdbcdn.com/oh/badcb7e2-37be-4e4f-9fc4-592f38605810.jpg?w=1920', 
    'https://l.icdbcdn.com/oh/c7020001-6de1-4d48-90e6-32796ce059eb.jpg?w=1920', 
    'https://l.icdbcdn.com/oh/5d8ef925-a1cb-4d34-9287-13330e080001.jpg?w=1920', 
    'https://l.icdbcdn.com/oh/8a2912d9-3003-401b-af36-eb45f68e4bf7.jpg?w=1920', 
    'https://l.icdbcdn.com/oh/eae8d6ae-e5c1-469c-b7f3-02807982406c.jpg?w=1920', 
    'https://l.icdbcdn.com/oh/f8063ef8-7ee3-41a2-8623-232b2d064d5f.jpg?w=1920', 
    'https://l.icdbcdn.com/oh/51ea5b4d-1668-4bf4-9196-0f9eebbeb95c.jpg?w=1920', 
    'https://l.icdbcdn.com/oh/e79cf141-baae-4fbd-8622-2a9476dd2f4a.jpg?w=1920', 
    'https://l.icdbcdn.com/oh/08d9051c-2cc9-4f67-8f30-4d6cc26b5832.jpg?w=1920', 
    'https://l.icdbcdn.com/oh/2312f9b0-e11b-45b1-a82e-201fbee82755.jpg?w=1920', 
    'https://l.icdbcdn.com/oh/7a2b6c47-357e-47c1-b0fd-cd00091d76fc.jpg?w=1920', 
    'https://l.icdbcdn.com/oh/c3e463a1-2655-4dc4-afe1-9a25a228f1e0.jpg?w=1920', 
    'https://l.icdbcdn.com/oh/dcba38c1-66e7-40a8-8ad5-122b106b1738.jpg?w=1920', 
    'https://l.icdbcdn.com/oh/26145900-271a-4a53-a791-97e9bdd851e0.jpg?w=1920', 
    'https://l.icdbcdn.com/oh/6962a3b7-95cb-46ce-bf22-51eb0749d6aa.jpg?w=1920', 
    'https://l.icdbcdn.com/oh/8b9f6cb3-21e9-4bf9-85f6-e8ba5103306b.jpg?w=1920', 
    'https://l.icdbcdn.com/oh/e821471c-6e57-49f0-a822-75e353f9514e.jpg?w=1920', 
    'https://l.icdbcdn.com/oh/de64a83c-a109-4ffd-b094-f2e020d7ca22.jpg?w=1920', 
    'https://l.icdbcdn.com/oh/d535fdec-fcce-4f55-914f-54951d54aa93.jpg?w=1920', 
    'https://l.icdbcdn.com/oh/ac976ed9-7270-464c-9da3-94ee20bd1d8f.jpg?w=1920', 
    'https://l.icdbcdn.com/oh/de52ba6d-552b-41c4-8de0-c67c1aa3a02e.jpg?w=1920'
];

// Función para cambiar la imagen principal al hacer clic en las miniaturas
function cambiarImagenPrincipal(indice) {
    const imagenPrincipal = document.getElementById('imagen-principal');
    const miniaturas = document.querySelectorAll('.contenedor-miniaturas img');

    // Reduce la opacidad de la imagen principal a 0 para iniciar la transición
    imagenPrincipal.style.opacity = 0;

    // Cambia la imagen después de que la transición de opacidad termine
    setTimeout(() => {
        imagenPrincipal.src = miniaturas[indice].src;
        imagenPrincipal.style.opacity = 1;
    }, 500); // El tiempo de espera coincide con la duración de la transición de opacidad

    // Actualiza la clase de la miniatura seleccionada para reflejar la imagen activa
    miniaturas.forEach((miniatura, index) => {
        if(index === indice) {
            miniatura.classList.add('seleccionada');
        } else {
            miniatura.classList.remove('seleccionada');
        }
    });
}

// Función para mover la imagen principal a la siguiente o anterior en el array
function moverImagen(direccion) {
    indiceActual += direccion;

    // Actualiza el índice actual basado en la dirección (adelante o atrás)
    if (indiceActual >= imagenes.length) {
        indiceActual = 0;
    } else if (indiceActual < 0) {
        indiceActual = imagenes.length - 1;
    }

    // Cambia a la imagen principal correspondiente al nuevo índice
    cambiarImagenPrincipal(indiceActual);
}
