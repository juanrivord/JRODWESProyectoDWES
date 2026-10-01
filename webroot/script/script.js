document.addEventListener("DOMContentLoaded", () => {
    const inputBuscador = document.getElementById("buscador");
    const tarjetas = document.querySelectorAll(".cajas_imagenes");

    inputBuscador.addEventListener("keyup", (e) => {
        const textoBusqueda = e.target.value.toLowerCase();

        tarjetas.forEach((tarjeta) => {
            const titulo = tarjeta.querySelector("figcaption").textContent.toLowerCase();

            if (titulo.includes(textoBusqueda)) {
                tarjeta.style.display = "block";
            } else {
                tarjeta.style.display = "none";
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const botonTema = document.getElementById("boton-tema");
    const cuerpo = document.body;

    if (localStorage.getItem("tema") === "oscuro") {
        cuerpo.classList.add("modo-oscuro");
        botonTema.textContent = "Modo Claro";
    }

    botonTema.addEventListener("click", () => {
        cuerpo.classList.toggle("modo-oscuro");

        if (cuerpo.classList.contains("modo-oscuro")) {
            localStorage.setItem("tema", "oscuro");
            botonTema.textContent = "Modo Claro";
        } else {
            localStorage.setItem("tema", "claro");
            botonTema.textContent = "Modo Oscuro";
        }
    });
});