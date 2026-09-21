/* =========================================
   ELEMENTOS
========================================= */

const openGift = document.getElementById("openGift");
const opening = document.getElementById("opening");
const cardContent = document.getElementById("cardContent");
const starRain = document.getElementById("starRain");


/* =========================================
   CREAR ESTRELLA
========================================= */

function createStar() {

    const star = document.createElement("div");

    star.classList.add("star");

    /*
        Posición horizontal aleatoria
    */

    star.style.left =
        Math.random() * 100 + "%";


    /*
        Tamaño aleatorio
    */

    const size =
        Math.random() * 3 + 1;

    star.style.width =
        size + "px";

    star.style.height =
        size + "px";


    /*
        Duración aleatoria
    */

    star.style.animationDuration =
        (Math.random() * 2 + 1.5) + "s";


    /*
        Retraso
    */

    star.style.animationDelay =
        Math.random() * .8 + "s";


    starRain.appendChild(star);


    /*
        Eliminar después de la animación
    */

    setTimeout(() => {

        star.remove();

    }, 4000);
}


/* =========================================
   LLUVIA DE ESTRELLAS
========================================= */

function createStarRain(amount) {

    for (let i = 0; i < amount; i++) {

        setTimeout(() => {

            createStar();

        }, i * 25);

    }
}


/* =========================================
   ABRIR REGALO
========================================= */

openGift.addEventListener("click", () => {

    /*
        Primero hacemos aparecer
        una gran cantidad de estrellas
    */

    createStarRain(100);


    /*
        Pequeña espera para que
        la lluvia sea visible
    */

    setTimeout(() => {

        opening.classList.add("hide");

        cardContent.classList.add("visible");

        /*
            Volvemos a habilitar
            el scroll
        */

        document.body.style.overflow = "auto";

    }, 1300);

});


/* =========================================
   ESTRELLAS AMBIENTALES
========================================= */

function ambientStars() {

    for (let i = 0; i < 35; i++) {

        const star = document.createElement("div");

        star.classList.add("star");

        star.style.position = "fixed";

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";

        star.style.opacity =
            Math.random() * .5 + .2;

        star.style.animation =
            "none";

        const size =
            Math.random() * 2 + 1;

        star.style.width =
            size + "px";

        star.style.height =
            size + "px";

        document.body.appendChild(star);

    }

}


/* =========================================
   INICIO
========================================= */

document.body.style.overflow = "hidden";

ambientStars();