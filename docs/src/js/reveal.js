document.addEventListener("DOMContentLoaded", () => {
  ScrollReveal().reveal("#reveal", {
    distance: "50px", // Distância da animação
    duration: 2500, // Duração da animação (ms)
    easing: "ease-in-out", // Curva de animação
    origin: "bottom", // Origem do movimento (top, left, right, bottom)
  });
});

document.addEventListener("DOMContentLoaded", () => {
  ScrollReveal().reveal("#p-reveal", {
    distance: "50px", // Distância da animação
    duration: 2500, // Duração da animação (ms)
    easing: "ease-in-out", // Curva de animação
    origin: "bottom", // Origem do movimento (top, left, right, bottom)
  });
});

// Reveal para o background img da seção banda
window.addEventListener("scroll", function () {
  const bandaSection = document.getElementById("banda");
  const rect = bandaSection.getBoundingClientRect();

  // Verifica se a seção está visível na tela
  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
    bandaSection.classList.add("reveal"); // Adiciona a classe quando a seção aparece
  }
});
