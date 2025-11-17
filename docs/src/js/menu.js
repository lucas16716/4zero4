"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu");
  const video = document.getElementById("video-background");
  const sections = document.querySelectorAll("section[id]");
  const navItems = document.querySelectorAll(".nav-ul .nav-item");
  const dropdownParent = document.querySelector(
    '.nav-item-dropdown > a[href="#sobre"]'
  );
  const dropdownLinks = document.querySelectorAll(".dropdown-menu a");
  const backToTopLinks = document.querySelectorAll(".back-to-top");
  const menuToggleCheckbox = document.getElementById("menu-toggle");
  const mobileMenuLinks = document.querySelectorAll('.nav-ul a[href^="#"]');
  const dropdownLi = document.querySelector(".nav-item-dropdown");
  const dropdownLink = dropdownLi ? dropdownLi.querySelector("a") : null;
  const SCROLL_OFFSET = 50;
  function removeAllClickedClasses() {
    navItems.forEach((link) => link.classList.remove("clicked"));
    if (dropdownParent) dropdownParent.classList.remove("clicked");
  }
  function handleNavLinkClick(event) {
    event.preventDefault();
    const link = event.currentTarget;
    const href = link.getAttribute("href");
    if (!href || !href.startsWith("#")) return;
    const targetId = href.substring(1);
    const targetSection = document.getElementById(targetId);
    if (!targetSection) return;
    const targetPosition = targetSection.offsetTop - SCROLL_OFFSET;
    window.scrollTo({ top: targetPosition, behavior: "smooth" });
    removeAllClickedClasses();
    if (link.closest(".dropdown-menu")) {
      if (dropdownParent) dropdownParent.classList.add("clicked");
    } else {
      link.classList.add("clicked");
    }
  }
  function handleBackToTopClick(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    removeAllClickedClasses();
  }
  const sectionObserverOptions = { root: null, threshold: 0.6 };
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const targetId = entry.target.getAttribute("id");
      if (entry.isIntersecting) {
        removeAllClickedClasses();
        const activeLink = document.querySelector(
          `.nav-item[href="#${targetId}"]`
        );
        if (activeLink) {
          activeLink.classList.add("clicked");
        }
        if (
          (targetId === "banda" || targetId === "integrantes") &&
          dropdownParent
        ) {
          dropdownParent.classList.add("clicked");
        }
      }
    });
  }, sectionObserverOptions);
  sections.forEach((section) => sectionObserver.observe(section));
  if (menu && video) {
    const headerObserverOptions = { rootMargin: "-12% 0px 0px 0px" };
    const headerObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          menu.classList.add("scrolled");
        } else {
          menu.classList.remove("scrolled");
        }
      });
    }, headerObserverOptions);
    headerObserver.observe(video);
  }
  navItems.forEach((item) =>
    item.addEventListener("click", handleNavLinkClick)
  );
  dropdownLinks.forEach((link) =>
    link.addEventListener("click", handleNavLinkClick)
  );
  backToTopLinks.forEach((link) =>
    link.addEventListener("click", handleBackToTopClick)
  );
  if (dropdownLi && dropdownLink) {
    dropdownLink.addEventListener("click", (event) => {
      if (window.innerWidth <= 1380) {
        event.preventDefault();
        dropdownLi.classList.toggle("active");
      }
    });
    document.addEventListener("click", (event) => {
      if (!dropdownLi.contains(event.target)) {
        dropdownLi.classList.remove("active");
      }
    });
  }
  function closeMobileMenu() {
    if (menuToggleCheckbox && menuToggleCheckbox.checked) {
      menuToggleCheckbox.checked = !1;
    }
  }
  mobileMenuLinks.forEach((link) => {
    if (link.parentElement.classList.contains("nav-item-dropdown")) {
      return;
    }
    link.addEventListener("click", closeMobileMenu);
  });
});
