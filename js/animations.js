gsap.registerPlugin(ScrollTrigger);

gsap.from(".nombre", {
  scrollTrigger: {
    trigger: ".nombre",
    start: "top 80%", // cuando la imagen entra en pantalla
    toggleActions: "play none none none"
  },
  x: -300,
  opacity: 0,
  duration: 1.5,
  ease: "expo.out"
});

gsap.from(".titulo-secundario.dj", {
  opacity: 0,
  duration: 1,
  delay: 1
});

gsap.from(".imagen-secundaria", {
  scrollTrigger: {
    trigger: ".imagen-secundaria",
    start: "top 80%", // cuando la imagen entra en pantalla
    toggleActions: "play none none none"
  },
  y: 200,
  opacity: 0,
  duration: 1.5,
  ease: "power3.out"
});


let mm = gsap.matchMedia();

mm.add("(max-width: 768px)", () => {
  // 📱 MÓVIL
  gsap.utils.toArray(".portada-seccion").forEach((img) => {
    gsap.from(img, {
      scrollTrigger: {
        trigger: img,
        start: "top 95%", // 👈 SOLO en móvil
      },
      y: 50,
      opacity: 0,
      duration: 0.6
    });
  });
});

mm.add("(min-width: 769px)", () => {
  // 💻 DESKTOP
  gsap.utils.toArray(".portada-seccion").forEach((img) => {
    gsap.from(img, {
      scrollTrigger: {
        trigger: img,
        start: "top 80%", // 👈 escritorio
      },
      y: 100,
      opacity: 0,
      duration: 1
    });
  });
});