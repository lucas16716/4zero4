document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav-item");
  const sections = document.querySelectorAll("section");
  const dropdownParent = document.querySelector(
    '.nav-item-dropdown > a[href="#sobre"]'
  );
  const dropdownLinks = document.querySelectorAll(".dropdown-menu a");

  // Defina um deslocamento fixo (ajuste conforme necessário)
  const scrollOffset = 50; // Pixels a menos ao rolar para a seção

  // Função para remover a classe "clicked" de todos os links
  function removeClickedClass() {
    navItems.forEach((link) => link.classList.remove("clicked"));
  }

  // Função para controlar a animação de writeline nas seções
  function handleWritelineAnimation(targetId, isIntersecting) {
    const section = document.getElementById(targetId);

    // Só adicionar/remover animação nas seções visíveis
    if (isIntersecting) {
      section.classList.add("writeline-animation"); // Adiciona animação quando a seção estiver visível
    } else {
      section.classList.remove("writeline-animation"); // Remove animação quando a seção não estiver visível
    }
  }

  // Função para adicionar a classe "clicked" ao link correspondente
  function setActiveLink(targetId) {
    removeClickedClass();
    const activeLink = document.querySelector(`.nav-item[href="#${targetId}"]`);
    if (activeLink) {
      activeLink.classList.add("clicked");
    }
  }

  // Usando Intersection Observer para detectar as seções visíveis
  const observerOptions = {
    root: null,
    threshold: 0.6, // Detecta 60% da seção na viewport
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const targetId = entry.target.getAttribute("id");
      const isIntersecting = entry.isIntersecting;
      handleWritelineAnimation(targetId, isIntersecting); // Controla animação com base na visibilidade
      if (isIntersecting) {
        setActiveLink(targetId); // Marca o link ativo quando a seção estiver visível
      }

      // Verifica se "banda" ou "integrantes" estão visíveis para riscar "sobre"
      if (targetId === "banda" || targetId === "integrantes") {
        if (isIntersecting) {
          dropdownParent.classList.add("clicked");
        } else {
          dropdownParent.classList.remove("clicked");
        }
      }
    });
  }, observerOptions);

  // Observe todas as seções
  sections.forEach((section) => {
    observer.observe(section);
  });

  // Adicionar comportamento ao clicar nos links
  navItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault(); // Previne comportamento padrão de navegação
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      // Remover animação de writeline da seção anterior
      sections.forEach((section) =>
        section.classList.remove("writeline-animation")
      );

      if (targetSection) {
        // Calcula a posição ajustada com offset
        const targetPosition = targetSection.offsetTop - scrollOffset;

        // Rola suavemente até a posição ajustada
        window.scrollTo({ top: targetPosition, behavior: "smooth" });
      }

      // Adiciona a classe "clicked" ao link clicado
      removeClickedClass();
      this.classList.add("clicked");
    });
  });

  // Adicionar comportamento ao clicar nos links do dropdown
  dropdownLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Previne comportamento padrão de navegação
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      // Remover animação de writeline da seção anterior
      sections.forEach((section) =>
        section.classList.remove("writeline-animation")
      );

      if (targetSection) {
        // Calcula a posição ajustada com offset
        const targetPosition = targetSection.offsetTop - scrollOffset;

        // Rola suavemente até a posição ajustada
        window.scrollTo({ top: targetPosition, behavior: "smooth" });
      }

      // Adiciona a classe "clicked" ao dropdown principal
      removeClickedClass();
      dropdownParent.classList.add("clicked");
    });
  });

  // Usando Intersection Observer para controlar o comportamento do "Sobre"
  const sobreObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.target.id === "banda" || entry.target.id === "integrantes") {
        if (entry.isIntersecting) {
          dropdownParent.classList.add("clicked"); // Riscando "Sobre" quando "Banda" ou "Integrantes" estiver visível
        } else {
          dropdownParent.classList.remove("clicked");
        }
      }
    });
  }, observerOptions);

  // Observe as seções Banda e Integrantes
  const bandaSection = document.getElementById("banda");
  const integrantesSection = document.getElementById("integrantes");
  if (bandaSection) sobreObserver.observe(bandaSection);
  if (integrantesSection) sobreObserver.observe(integrantesSection);

  // Função para troca de cores do nav ao scrollar
  window.addEventListener("scroll", function () {
    const menu = document.getElementById("menu");
    const video = document.getElementById("video-background");

    if (!menu || !video) return; // Verifica se os elementos existem

    // Pega a posição do vídeo e o seu tamanho
    const videoRect = video.getBoundingClientRect();

    // Definindo um ponto em que o menu muda de cor
    const triggerPoint = window.innerHeight * 0.12;

    // Verifica se a parte inferior do vídeo está passando do ponto de gatilho
    if (videoRect.bottom <= triggerPoint) {
      menu.classList.add("scrolled"); // Menu muda de cor quando o vídeo estiver quase saindo
    } else {
      menu.classList.remove("scrolled"); // Menu volta ao estado original
    }
  });

  // Função para voltar ao topo
  document.querySelectorAll(".back-to-top").forEach((element) => {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      removeClickedClass();
    });
  });
});
