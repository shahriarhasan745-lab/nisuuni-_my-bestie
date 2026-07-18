// Current slide track korar jonno
let current = 0;
const slides = document.querySelectorAll('.slide');

function nextSlide() {
    // Current slide-e exit animation apply kora
    const currentSlide = slides[current];
    currentSlide.style.transition = 'all 0.5s ease-in-out';
    currentSlide.style.transform = 'translateX(-100%) scale(0.8) rotate(-15deg)';
    currentSlide.style.opacity = '0';

    setTimeout(() => {
        // Active class remove kora
        currentSlide.classList.remove('active');
        currentSlide.style.transform = 'translateX(0) scale(1) rotate(0deg)';
        
        // Next index calculate kora
        current = (current + 1) % slides.length;
        
        // Next slide prepare kora
        const nextSlide = slides[current];
        nextSlide.classList.add('active');
        nextSlide.style.opacity = '0';
        nextSlide.style.transform = 'translateX(100%) scale(0.8) rotate(15deg)';
        
        // Enter animation trigger kora
        setTimeout(() => {
            nextSlide.style.transition = 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            nextSlide.style.opacity = '1';
            nextSlide.style.transform = 'translateX(0) scale(1) rotate(0deg)';
        }, 50);
    }, 500);
}
