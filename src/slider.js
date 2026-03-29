document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('testimonial-slider');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  // Función para mover
  const moveSlider = (direction) => {
    const width = slider.clientWidth;
    slider.scrollLeft += direction * width;
  };

  // Eventos de botones
  prevBtn.addEventListener('click', () => moveSlider(-1));
  nextBtn.addEventListener('click', () => moveSlider(1));

  // Actualizar puntos al hacer scroll
  slider.addEventListener('scroll', () => {
    const index = Math.round(slider.scrollLeft / slider.clientWidth);
    dots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.replace('bg-black/25', 'bg-secondary');
      } else {
        dot.classList.replace('bg-secondary', 'bg-black/25');
      }
    });
  });
});
