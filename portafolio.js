/* =========================================
   PORTAFOLIO JS
   Animaciones y comportamiento básico
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       SCROLL SUAVE (MENÚ)
    =============================== */
    const links = document.querySelectorAll(".menu a");

    links.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    /* ===============================
       ANIMACIÓN AL HACER SCROLL
    =============================== */
    const sections = document.querySelectorAll("section");

    const revealSection = () => {
        const triggerBottom = window.innerHeight * 0.85;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", revealSection);
    revealSection();

    /* ===============================
       VALIDACIÓN BÁSICA FORMULARIO
    =============================== */
    const form = document.querySelector(".formulario");

    if (form) {
        form.addEventListener("submit", e => {
            e.preventDefault();

            const inputs = form.querySelectorAll("input, textarea");
            let valid = true;

            inputs.forEach(input => {
                if (input.value.trim() === "") {
                    input.style.borderColor = "#ef4444";
                    valid = false;
                } else {
                    input.style.borderColor = "rgba(168, 85, 247, 0.5)";
                }
            });

            if (valid) {
                alert("Mensaje enviado correctamente 🚀");
                form.reset();
            } else {
                alert("Por favor completa todos los campos");
            }
        });
    }

});
