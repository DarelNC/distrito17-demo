document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('testimonial-slider');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let autoPlayInterval;

    const moveSlider = (direction) => {
        const width = slider.clientWidth;
        const maxScroll = slider.scrollWidth - width;
        
        // Si llegamos al final y pulsamos "siguiente", vuelve al principio
        if (direction === 1 && slider.scrollLeft >= maxScroll - 10) {
            slider.scrollLeft = 0;
        } 
        // Si estamos al principio y pulsamos "atrás", va al final
        else if (direction === -1 && slider.scrollLeft <= 10) {
            slider.scrollLeft = maxScroll;
        } 
        else {
            slider.scrollLeft += direction * width;
        }
        resetAutoPlay();
    };

    // Lógica del Auto-play
    const startAutoPlay = () => {
        autoPlayInterval = setInterval(() => {
            moveSlider(1);
        }, 3000); // Cambia cada 5 segundos
    };

    const resetAutoPlay = () => {
        clearInterval(autoPlayInterval);
        startAutoPlay();
    };

    // Eventos
    prevBtn.addEventListener('click', () => moveSlider(-1));
    nextBtn.addEventListener('click', () => moveSlider(1));

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            slider.scrollLeft = index * slider.clientWidth;
            resetAutoPlay();
        });
    });

    // Actualizar puntos al hacer scroll
    slider.addEventListener('scroll', () => {
        const index = Math.round(slider.scrollLeft / slider.clientWidth);
        dots.forEach((dot, i) => {
            dot.classList.toggle('bg-secondary', i === index);
            dot.classList.toggle('bg-black/25', i !== index);
        });
    });

    // Iniciar al cargar
    startAutoPlay();
});
