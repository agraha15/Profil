// Smooth Scroll untuk Navigasi
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Animasi Masuk Sederhana pada Judul Header
const heroTitle = document.querySelector('.hero-title');
heroTitle.animate([
  { opacity: 0, transform: 'translateY(-20px)' },
  { opacity: 1, transform: 'translateY(0)' }
], {
  duration: 800,
  easing: 'ease-out'
});