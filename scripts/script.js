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


