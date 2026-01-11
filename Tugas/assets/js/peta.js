// Ambil semua elemen yang ingin dianimasikan
const items = document.querySelectorAll(
  '.peta h1, .peta iframe, .peta-card'
);

// Intersection Observer
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Saat masuk viewport → muncul
        entry.target.classList.add('active');
      } else {
        // Saat keluar viewport → hilang lagi
        entry.target.classList.remove('active');
      }
    });
  },
  {
    threshold: 0.3
  }
);

// Observe semua item
items.forEach(item => observer.observe(item));
