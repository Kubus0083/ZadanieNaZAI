document.addEventListener('DOMContentLoaded', () => {
  const searchBtn = document.querySelector('.search-box button');
  if (searchBtn) {
    searchBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const query = document.querySelector('.search-box input').value;
      if (query) {
        alert(query);
      }
    });
  }
  const track = document.querySelector('.carousel-track');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');

  if (track && prevBtn && nextBtn) {
    nextBtn.addEventListener('click', () => {
      const scrollAmount = track.clientWidth;
      track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
    prevBtn.addEventListener('click', () => {
      const scrollAmount = track.clientWidth;
      track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
  }
});
