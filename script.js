

gsap.registerPlugin(ScrollTrigger);

const botonAbrir = document.getElementById("abrirInvitacion");
const entrada = document.getElementById("entrada");
const sello = document.querySelector(".sello");
const musica = document.getElementById("musicaBoda");

let abriendo = false;

botonAbrir.addEventListener("click", () => {

    if (abriendo) return;
    abriendo = true;
    musica.play();

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

ScrollTrigger.refresh();

sello.addEventListener("click", () => {
    botonAbrir.click();
});
});

const fechaBoda = new Date("2026-12-05T16:30:00").getTime();

function actualizarContador() {
    const ahora = new Date().getTime();
    const diferencia = fechaBoda - ahora;

    if (diferencia <= 0) {
        document.getElementById("dias").textContent = "00";
        document.getElementById("horas").textContent = "00";
        document.getElementById("minutos").textContent = "00";
        document.getElementById("segundos").textContent = "00";
        return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("dias").textContent = String(dias).padStart(2, "0");
    document.getElementById("horas").textContent = String(horas).padStart(2, "0");
    document.getElementById("minutos").textContent = String(minutos).padStart(2, "0");
    document.getElementById("segundos").textContent = String(segundos).padStart(2, "0");
}

actualizarContador();
setInterval(actualizarContador, 1000);

document.getElementById("rsvpForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const asistencia = document.getElementById("asistencia").value.trim();
  const acompanantes = document.getElementById("acompanantes").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  const texto = 
`Hola, confirmamos asistencia a la boda de Sunim y Asahel.

Nombre: ${nombre}
Asistencia: ${asistencia}
¿Quiénes asistirán?: ${acompanantes || "No especificado"}
Mensaje: ${mensaje || "Sin mensaje"}`;

  const numero = "526441895826"; // CAMBIA ESTE NÚMERO POR EL TUYO
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

  window.open(url, "_blank");
});

/* =========================================================
   ANIMACIONES DE LA INVITACIÓN
   Elegantes, suaves y sutiles
   ========================================================= */

gsap.registerPlugin(ScrollTrigger);


/* =========================================================
   PORTADA
   ========================================================= */

gsap.from(".foto-principal", {
    opacity: 0,
    y: 30,
    duration: 1.3,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".foto-principal",
        start: "top 85%",
        once: true
    }
});


/* =========================================================
   INVITACIÓN
   ========================================================= */

gsap.from(".bendicion", {
    opacity: 0,
    y: 20,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".bendicion",
        start: "top 85%",
        once: true
    }
});


gsap.from(".padres", {
    opacity: 0,
    y: 18,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".padres",
        start: "top 85%",
        once: true
    }
});


gsap.from(".nombres-invitacion", {
    opacity: 0,
    scale: 0.96,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".nombres-invitacion",
        start: "top 85%",
        once: true
    }
});


gsap.from(".frase-invitacion", {
    opacity: 0,
    y: 18,
    duration: 0.9,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".frase-invitacion",
        start: "top 85%",
        once: true
    }
});


gsap.from(".fecha-boda", {
    opacity: 0,
    y: 15,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".fecha-boda",
        start: "top 85%",
        once: true
    }
});


/* =========================================================
   CONTADOR
   ========================================================= */

gsap.from(".contador", {
    opacity: 0,
    scale: 0.96,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".contador",
        start: "top 85%",
        once: true
    }
});


/* =========================================================
   VERSÍCULO
   ========================================================= */

gsap.from(".texto-biblico", {
    opacity: 0,
    y: 22,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".texto-biblico",
        start: "top 85%",
        once: true
    }
});


/* =========================================================
   FOTO DE SECCIÓN
   ========================================================= */

gsap.from(".foto-seccion-img", {
    opacity: 0,
    x: 35,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".foto-seccion-img",
        start: "top 85%",
        once: true
    }
});


/* =========================================================
   ITINERARIO
   ========================================================= */

gsap.from(".itinerario-titulo", {
    opacity: 0,
    y: -18,
    duration: 0.9,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".itinerario-titulo",
        start: "top 85%",
        once: true
    }
});


gsap.from(".itinerario-item", {
    opacity: 0,
    y: 18,
    duration: 0.75,
    stagger: 0.18,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".itinerario-lista",
        start: "top 82%",
        once: true
    }
});


/* =========================================================
   LUGAR DE CELEBRACIÓN
   ========================================================= */

const lugarTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".seccion-lugar",
        start: "top 80%",
        once: true
    }
});

lugarTimeline
    .from(".dibujo-local", {
        opacity: 0,
        y: 15,
        duration: 0.8,
        ease: "power2.out"
    })
    .from(".titulo-lugar", {
        opacity: 0,
        y: 12,
        duration: 0.6,
        ease: "power2.out"
    }, "-=0.35")
    .from(".nombre-lugar", {
        opacity: 0,
        y: 15,
        duration: 0.7,
        ease: "power2.out"
    }, "-=0.3")
    .from(".direccion-lugar", {
        opacity: 0,
        y: 10,
        duration: 0.5,
        ease: "power2.out"
    }, "-=0.3")
    gsap.from(".boton-mapa", {
    opacity: 0,
    y: 15,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".boton-mapa",
        start: "top 85%",
        once: true
    }
});


/* =========================================================
   FOTO INTERMEDIA
   ========================================================= */

gsap.from(".foto-seccion2", {
    opacity: 0,
    scale: 0.97,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".foto-seccion2",
        start: "top 85%",
        once: true
    }
});


/* =========================================================
   DRESS CODE
   ========================================================= */

const dressTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".seccion-dresscode",
        start: "top 80%",
        once: true
    }
});

dressTimeline
    .from(".tarjeta-principal", {
        opacity: 0,
        y: 25,
        duration: 1,
        ease: "power2.out"
    })
    .from(".formal-box", {
        opacity: 0,
        y: 15,
        duration: 0.7,
        ease: "power2.out"
    }, "-=0.55")
    .from(".codigo-img", {
        opacity: 0,
        scale: 0.96,
        duration: 0.7,
        ease: "power2.out"
    }, "-=0.35")
    .from(".dibujo-dresscode", {
        opacity: 0,
        y: 15,
        duration: 0.8,
        ease: "power2.out"
    }, "-=0.35")
    .from(".western-box", {
        opacity: 0,
        y: 15,
        duration: 0.7,
        ease: "power2.out"
    }, "-=0.35")
    .from(".flores-dresscode", {
        opacity: 0,
        scale: 0.97,
        duration: 0.8,
        ease: "power2.out"
    }, "-=0.45");


/* =========================================================
   REGALOS
   ========================================================= */

const regalosTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".regalos-bloque",
        start: "top 82%",
        once: true
    }
});

regalosTimeline
    .from(".tarjeta-regalos", {
        opacity: 0,
        y: 25,
        duration: 1,
        ease: "power2.out"
    })
    .from(".sello-regalos", {
        opacity: 0,
        scale: 0.94,
        duration: 0.7,
        ease: "power2.out"
    }, "-=0.55")
    .from(".calas-regalos", {
        opacity: 0,
        y: 15,
        duration: 0.8,
        ease: "power2.out"
    }, "-=0.35")
    .from(".circulo-regalos", {
        opacity: 0,
        scale: 0.96,
        duration: 0.8,
        ease: "power2.out"
    }, "-=0.4");


/* =========================================================
   FOTO DE CORTE
   ========================================================= */

gsap.from(".foto-corte", {
    opacity: 0,
    scale: 0.98,
    duration: 1.3,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".foto-corte",
        start: "top 85%",
        once: true
    }
});


/* =========================================================
   RSVP
   ========================================================= */

const rsvpTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".seccion-rsvp",
        start: "top 80%",
        once: true
    }
});

rsvpTimeline
    .from(".rsvp-flores", {
        opacity: 0,
        y: -15,
        duration: 0.9,
        ease: "power2.out"
    })
    .from(".rsvp-sobre", {
        opacity: 0,
        x: -20,
        duration: 0.9,
        ease: "power2.out"
    }, "-=0.45")
    .from(".rsvp-card", {
        opacity: 0,
        y: 25,
        duration: 1,
        ease: "power2.out"
    }, "-=0.55")
    .from(".rsvp-texto-final", {
        opacity: 0,
        y: 15,
        duration: 0.8,
        ease: "power2.out"
    }, "-=0.35");


/* =========================================================
   IMAGEN FINAL
   ========================================================= */

gsap.from(".imagen-final", {
    opacity: 0,
    scale: 0.97,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".imagen-final",
        start: "top 90%",
        once: true
    }
});


/* =========================================================
   ACTUALIZAR SCROLLTRIGGER DESPUÉS DEL SOBRE
   ========================================================= */

ScrollTrigger.refresh();


/* =========================================================
   RESPETAR REDUCCIÓN DE MOVIMIENTO
   ========================================================= */

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
}

