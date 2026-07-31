// ==========================================
// ALMERA WEB V1.0
// Script principal
// Animaciones y funciones generales
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // ANIMACIÓN AL HACER SCROLL
    // ==========================================

    const elementos = document.querySelectorAll(
        "section, .card, .ebook, .bloque"
    );

    const mostrarElemento = () => {

        const alturaPantalla = window.innerHeight;

        elementos.forEach(elemento => {

            const posicion = elemento.getBoundingClientRect().top;

            if (posicion < alturaPantalla - 100) {
                elemento.classList.add("visible");
            }

        });

    };


    window.addEventListener("scroll", mostrarElemento);

    mostrarElemento();



    // ==========================================
    // SCROLL SUAVE PARA ENLACES INTERNOS
    // ==========================================

    const enlaces = document.querySelectorAll('a[href^="#"]');

    enlaces.forEach(enlace => {

        enlace.addEventListener("click", function(e){

            const destino = document.querySelector(
                this.getAttribute("href")
            );

            if(destino){

                e.preventDefault();

                destino.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });



    // ==========================================
    // AÑO AUTOMÁTICO FOOTER
    // ==========================================

    const año = document.querySelector("#year");

    if(año){

        año.textContent = new Date().getFullYear();

    }



    // ==========================================
    // MENSAJE DE CARGA CORRECTA
    // ==========================================

    console.log(
        "ALMERA WEB V1.0 cargada correctamente 🚀"
    );

});
