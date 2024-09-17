window.onload = () => {
    const jugador = {
      elemento: document.getElementById("player"),
      posicionSuperior: 0,
      posicionIzquierda: 0,
      paso: 25,
      mover: function (direccion) {
        const limiteSuperior = 0;
        const limiteInferior = window.innerHeight - this.elemento.offsetHeight;
        const limiteIzquierdo = 0;
        const limiteDerecho = window.innerWidth - this.elemento.offsetWidth;
  
        switch (direccion) {
          case "ArrowUp":
            this.posicionSuperior -= this.paso; // Restamos el paso para mover hacia arriba
            if (this.posicionSuperior < limiteSuperior) {
              this.posicionSuperior = limiteInferior; // Si se sale por arriba, reaparece abajo
            }
            break;
  
          case "ArrowDown":
            this.posicionSuperior += this.paso; // Sumamos el paso para mover hacia abajo
            if (this.posicionSuperior > limiteInferior) {
              this.posicionSuperior = limiteSuperior; // Si se sale por abajo, reaparece arriba
            }
            break;
  
          case "ArrowLeft":
            this.posicionIzquierda -= this.paso; // Mover hacia la izquierda
            if (this.posicionIzquierda < limiteIzquierdo) {
              this.posicionIzquierda = limiteDerecho; // Si se sale por la izquierda, reaparece a la derecha
            }
            break;
  
          case "ArrowRight":
            this.posicionIzquierda += this.paso; // Mover hacia la derecha
            if (this.posicionIzquierda > limiteDerecho) {
              this.posicionIzquierda = limiteIzquierdo; // Si se sale por la derecha, reaparece a la izquierda
            }
            break;
  
          default:
            break;
        }
  
        // Actualizamos las posiciones en CSS
        this.elemento.style.top = this.posicionSuperior + "px";
        this.elemento.style.left = this.posicionIzquierda + "px";
      }
    };
  
    document.onkeydown = (event) => {
      jugador.mover(event.code); // Detectar la tecla presionada
    };
  };
  