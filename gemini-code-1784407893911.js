document.querySelectorAll('.photo-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transition = `opacity 0.5s ease ${index * 0.1}s`;
    setTimeout(() => { card.style.opacity = '1'; }, 100);
});