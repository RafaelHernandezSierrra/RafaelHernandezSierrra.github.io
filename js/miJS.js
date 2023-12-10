// Obtén los enlaces de la barra de navegación y los divs de contenido
const enlaces = document.querySelectorAll(".nav-link");
const divsContenido = document.querySelectorAll(".contenido");

// Añade un evento de clic a cada enlace
enlaces.forEach((enlace, index) => {
    enlace.addEventListener("click", function(event) {
        // Evita el comportamiento predeterminado del enlace (no seguir el enlace)
        event.preventDefault();

        // Oculta todos los divs de contenido
        divsContenido.forEach(div => {
            div.classList.add("hidden");
        });

        if(enlace==enlaces[0]){
        // Muestra el div de contenido correspondiente según el índice del enlace
        divsContenido[0].classList.remove("hidden");
        divsContenido[1].classList.remove("hidden");
        divsContenido[2].classList.remove("hidden");
        divsContenido[3].classList.remove("hidden");
         } 
         
         if(enlace==enlaces[1]){
            // Muestra el div de contenido correspondiente según el índice del enlace
            divsContenido[4].classList.remove("hidden");
            divsContenido[5].classList.remove("hidden");
            divsContenido[6].classList.remove("hidden");
            divsContenido[7].classList.remove("hidden");
         }
        if(enlace==enlaces[2]){
                // Muestra el div de contenido correspondiente según el índice del enlace
                divsContenido[8].classList.remove("hidden");
                divsContenido[9].classList.remove("hidden");
                divsContenido[10].classList.remove("hidden");
                divsContenido[11].classList.remove("hidden");
                divsContenido[12].classList.remove("hidden");
                divsContenido[13].classList.remove("hidden");
                divsContenido[14].classList.remove("hidden");
                divsContenido[15].classList.remove("hidden");
                divsContenido[16].classList.remove("hidden");
                divsContenido[17].classList.remove("hidden");
        }
        if(enlace==enlaces[3]){
            
            divsContenido[18].classList.remove("hidden");   
        }
    });
});

