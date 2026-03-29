document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('testimonial-slider');
    const dots = document.querySelectorAll('.dot');
    const slides = slider.children;
    let isMoving = false;

    // Posición inicial: saltamos el clon del último para empezar en el Slide 1 real
    slider.scrollLeft = slider.clientWidth;

    const updateDots = (index) => {
        // Ajustamos el índice porque tenemos un clon al principio
        let realIndex = index - 1;
        if (realIndex < 0) realIndex = dots.length - 1;
        if (realIndex >= dots.length) realIndex = 0;

        dots.forEach((dot, i) => {
            dot.classList.toggle('bg-secondary', i === realIndex);
            dot.classList.toggle('bg-black/25', i !== realIndex);
        });
    };

    const checkBoundary = () => {
        const width = slider.clientWidth;
        // Si llegamos al clon del final, saltamos al primero real (sin scroll suave)
        if (slider.scrollLeft >= (slides.length - 1) * width) {
            slider.style.scrollBehavior = 'auto';
            slider.scrollLeft = width;
            slider.style.scrollBehavior = 'smooth';
        }
        // Si llegamos al clon del principio, saltamos al último real
        if (slider.scrollLeft <= 0) {
            slider.style.scrollBehavior = 'auto';
            slider.scrollLeft = (slides.length - 2) * width;
            slider.style.scrollBehavior = 'smooth';
        }
    };

    const moveSlider = (direction) => {
        if (isMoving) return;
        isMoving = true;
        slider.scrollLeft += direction * slider.clientWidth;
        setTimeout(() => { isMoving = false; }, 500);
    };

    // Eventos
    document.getElementById('nextBtn').addEventListener('click', () => moveSlider(1));
    document.getElementById('prevBtn').addEventListener('click', () => moveSlider(-1));

    slider.addEventListener('scroll', () => {
        const index = Math.round(slider.scrollLeft / slider.clientWidth);
        updateDots(index);
        // Debemos chequear los límites después de que termine la animación
        clearTimeout(window.scrollTimer);
        window.scrollTimer = setTimeout(checkBoundary, 150);
    });

    // Auto-play
    setInterval(() => moveSlider(1), 3000);
});