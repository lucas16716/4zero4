"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const galleryContainer = document.querySelector("section#galeria .image");
  const images = document.querySelectorAll(".image img");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  if (!galleryContainer || images.length === 0 || !prevButton || !nextButton) {
    return;
  }
  let currentIndex = 0;
  function updateImage(newIndex) {
    images[currentIndex].classList.remove("active");
    images[newIndex].classList.add("active");
    currentIndex = newIndex;
  }
  function showNextImage() {
    const nextIndex = (currentIndex + 1) % images.length;
    updateImage(nextIndex);
  }
  function showPrevImage() {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage(prevIndex);
  }
  nextButton.addEventListener("click", showNextImage);
  prevButton.addEventListener("click", showPrevImage);
  galleryContainer.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      showNextImage();
    } else if (event.key === "ArrowLeft") {
      showPrevImage();
    }
  });
});
