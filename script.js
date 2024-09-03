
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


// Selecciona todas las tarjetas de beneficio y servicio
const benefitCards = document.querySelectorAll('.benefit-card, .service-card');

// Itera sobre cada tarjeta y añade los eventos
benefitCards.forEach(card => {
    // Evento para cuando el cursor entra en la tarjeta
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)'; // Reduce el aumento al 5%
        card.style.boxShadow = '0 12px 24px rgba(254, 120, 120, 0.5)';
    });

    // Evento para cuando el cursor sale de la tarjeta
    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '0 8px 16px rgba(254, 120, 120, 0.3)';
    });
});
