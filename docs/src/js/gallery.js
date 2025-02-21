const images = document.querySelectorAll(".image img");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentIndex = 0;

// Função para atualizar a exibição da imagem
function updateGallery(index) {
  images.forEach((img, i) => {
    img.classList.remove("active");
    if (i === index) {
      img.classList.add("active");
    }
  });
}

// Função para ir para a próxima imagem
function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length; // Volta ao início ao chegar no fim
  updateGallery(currentIndex);
}

// Função para ir para a imagem anterior
function showPrevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length; // Vai ao final ao ultrapassar o início
  updateGallery(currentIndex);
}

// Event listeners para os botões
nextButton.addEventListener("click", showNextImage);
prevButton.addEventListener("click", showPrevImage);

// Atualiza a galeria inicialmente
updateGallery(currentIndex);
