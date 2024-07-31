document.addEventListener('DOMContentLoaded', () => {
    // Change header style on scroll
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - header.offsetHeight,
                behavior: 'smooth'
            });
        });
    });

    // Interactive gradient background effect
    const gradientsContainer = document.querySelector('.gradients-container');
    const interactive = document.querySelector('.interactive');
    
    gradientsContainer.addEventListener('mousemove', (e) => {
        const { offsetX, offsetY } = e;
        const { clientWidth, clientHeight } = gradientsContainer;

        const moveX = (offsetX / clientWidth) * 50;
        const moveY = (offsetY / clientHeight) * 50;

        interactive.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});
