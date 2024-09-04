// slider.js

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    
    // Garantir que o índice fique dentro dos limites válidos
    if (index >= totalSlides) currentIndex = 0;
    else if (index < 0) currentIndex = totalSlides - 1;
    else currentIndex = index;

    // Atualiza a transformação do slider para mostrar o slide correto
    slides.style.transform = `translateX(${-currentIndex * 100}%)`;
}

function moveSlide(step) {
    // Calcula o novo índice com base no número de slides e move o slider
    showSlide(currentIndex + step);
}

// Inicializa o slider com o primeiro slide
showSlide(currentIndex);

// Adiciona eventos aos botões de navegação
document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
document.querySelector('.next').addEventListener('click', () => moveSlide(1));
