
document.addEventListener('DOMContentLoaded', () => {
    // Función para animar los elementos al hacer scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });

    // Seleccionar todos los elementos animables
    const animatedElements = document.querySelectorAll('.main-content h2, .main-content p, .main-content img, .service-card, .benefit-card, .benefits h2');
    
    // Aplicar el observer a cada uno
    animatedElements.forEach(element => observer.observe(element));
});

