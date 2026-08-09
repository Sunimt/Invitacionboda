const botonAbrir = document.getElementById("abrirInvitacion");
const entrada = document.getElementById("entrada");

let abriendo = false;

botonAbrir.addEventListener("click", () => {

    if (abriendo) return;
    abriendo = true;

    const tl = gsap.timeline();

    /* 1 — BOTÓN DESAPARECE SUAVEMENTE */
    tl.to("#abrirInvitacion", {
        opacity: 0,
        y: 3,
        duration: 0.35,
        ease: "power1.inOut"
    });


    /* 2 — EL SELLO HACE UNA PRESIÓN MUY SUAVE */
    tl.to(".sello", {
        scale: 0.97,
        duration: 0.22,
        ease: "power1.inOut"
    }, "<");


    /* 3 — SELLO SE LEVANTA */
    tl.to(".sello", {
        scale: 1,
        y: -6,
        rotation: -1,
        duration: 0.38,
        ease: "power2.inOut"
    });


    /* 4 — TEXTO DESAPARECE */
    tl.to(".love-letter, .contenido-sobre h1", {
        opacity: 0,
        y: -4,
        duration: 0.35,
        ease: "power1.inOut"
    }, "<");


    /* 5 — SELLO DESAPARECE */
    tl.to(".sello", {
        opacity: 0,
        y: -10,
        duration: 0.3,
        ease: "power1.inOut"
    });


    /* 6 — ABRE LA SOLAPA Y QUEDA VISIBLE */
tl.to(".solapa", {
    rotateX: -145,
    duration: 1.15,
    ease: "power2.inOut"
});


    /* ENCAJE ACOMPAÑA A LA SOLAPA */
    tl.to(".encajes", {
    rotateX: -145,
    duration: 1.15,
    ease: "power2.inOut"
}, "<");

    /* 7 — PREPARAMOS LA TARJETA */
    tl.set(".tarjeta-interior", {
        zIndex: 20,
        visibility: "visible"
    });


    /* 8 — APARECE SUAVEMENTE */
    tl.to(".tarjeta-interior", {
        opacity: 1,
        duration: 0.35,
        ease: "power1.inOut"
    });


    /* 9 — SALE DESPACIO DEL SOBRE */
    tl.to(".tarjeta-interior", {
        y: -170,
        scale: 1.015,
        duration: 1,
        ease: "power2.inOut"
    });


    /* 10 — PEQUEÑO MOVIMIENTO DEL SOBRE */
    tl.to(".sobre", {
        y: 15,
        scale: 0.985,
        duration: 0.55,
        ease: "power2.inOut"
    }, "-=0.7");


    /* 11 — TARJETA SE QUEDA QUIETA 5 SEGUNDOS */
    tl.to({}, {
        duration: .1
    });


    /* 12 — LA INVITACIÓN REAL EMPIEZA A APARECER */
tl.to("#invitacion", {
    opacity: 1,
    scale: 1,
    duration: 0.8,
    ease: "power2.inOut"
});



/* 14 — OCULTAMOS LA ENTRADA SIN DEJAR VER SU FONDO */
tl.set(".entrada", {
    visibility: "hidden",
    opacity: 0,
    pointerEvents: "none"
});


/* 15 — NOS ASEGURAMOS DE QUE LA INVITACIÓN QUEDE VISIBLE */
tl.set("#invitacion", {
    opacity: 1,
    scale: 1
});
});