// Scroll korle animation trigger korar jonno
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.scrap-section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight / 1.2;
        
        if(sectionTop < triggerPoint) {
            section.classList.add('show');
        } else {
            section.classList.remove('show');
        }
    });
});

// Page load holei animation shuru
window.addEventListener('load', () => {
    document.querySelectorAll('.scrap-section')[0].classList.add('show');
});
