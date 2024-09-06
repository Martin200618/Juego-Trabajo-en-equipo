document.addEventListener("DOMContentLoaded", function() {
    var sound = document.getElementById("musicaDeFondo");

    // Asegúrate de que el sonido esté listo antes de reproducirlo
    sound.oncanplaythrough = function () {
        sound.play().catch(function(error) {
            console.log("Error al intentar reproducir el sonido: " + error);
        });
    };

    // Reintenta reproducir el sonido si no se pudo reproducir inicialmente
    sound.load();
});

function alternarVisibilidadContrasena() {
    const passwordInput = document.getElementById('password');
    const icon = document.querySelector('.icon ion-icon');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
       // Cambia el icono a "abierto"
    } else {
        passwordInput.type = 'password';
         // Cambia el icono a "cerrado"
    }
}



const imagen = document.querySelector('.astronauta');
let estaArrastrando = false;
let inicioX = 0;
let rotacion = 0;
let velocidad = 5; // Velocidad base de la rotación

// Detectar cuando el usuario comienza a arrastrar
imagen.addEventListener('mousedown', (e) => {
    estaArrastrando = true;
    inicioX = e.clientX;
    imagen.style.animation = 'none'; // Detener animación para el arrastre manual
});

// Detectar cuando el usuario suelta el arrastre
window.addEventListener('mouseup', () => {
    if (estaArrastrando) {
        estaArrastrando = false;
        // Reiniciar animación con la nueva velocidad
        imagen.style.animation = `rotate ${velocidad}s linear infinite`;
    }
});

// Detectar movimiento durante el arrastre
window.addEventListener('mousemove', (e) => {
    if (estaArrastrando) {
        const deltaX = e.clientX - inicioX;
        rotacion += deltaX;
        inicioX = e.clientX;

        // Ajustar rotación manualmente mientras se arrastra
        imagen.style.transform = `rotate(${rotacion}deg)`;

        // Cambiar velocidad según la distancia arrastrada
        velocidad = Math.max(1, 10 - Math.abs(deltaX) / 10); // Ajusta la fórmula a tus necesidades
    }
});




