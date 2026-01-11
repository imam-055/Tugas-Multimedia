const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show'); // 🔥 ini kuncinya
    }
  });
}, {
  threshold: 0.2 // 20% terlihat baru aktif
});

reveals.forEach(reveal => {
  observer.observe(reveal);
});
