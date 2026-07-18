window.addEventListener('scroll', () => {
    document.querySelectorAll('.scrap-section').forEach(section => {
        const top = section.getBoundingClientRect().top;
        if(top < window.innerHeight - 100) {
            section.classList.add('show');
        }
    });
});
