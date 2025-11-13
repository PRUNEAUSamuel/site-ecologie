document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.getElementById('carousel');
  const slides = document.querySelectorAll('.carousel-item');
  const dots = document.querySelectorAll('.dot');
  const nextBtn = document.getElementById('next');
  const prevBtn = document.getElementById('prev');
  let index = 0;
  const intervalTime = 5000; // 5 secondes
  let interval;

  function showSlide(i) {
    carousel.style.transform = `translateX(-${i * 100}%)`;
    slides.forEach((slide, idx) => {
      const img = slide.querySelector('img');
      img.classList.remove('scale-110');
      if (idx === i) img.classList.add('scale-110');
    });
    dots.forEach(dot => dot.classList.remove('bg-green-600'));
    dots[i].classList.add('bg-green-600');
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
  }

  function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  }

  function startAutoSlide() {
    interval = setInterval(nextSlide, intervalTime);
  }

  function resetInterval() {
    clearInterval(interval);
    startAutoSlide();
  }

  nextBtn.addEventListener('click', () => {
    nextSlide();
    resetInterval();
  });

  prevBtn.addEventListener('click', () => {
    prevSlide();
    resetInterval();
  });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      index = i;
      showSlide(i);
      resetInterval();
    });
  });

  showSlide(index);
  startAutoSlide();
});