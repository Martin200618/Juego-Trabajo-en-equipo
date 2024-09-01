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