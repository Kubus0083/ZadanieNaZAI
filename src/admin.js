document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('.table-btn.delete').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      if (confirm('Ostrzeżenie: Czy na pewno chcesz trwale usunąć tę pozycję?')) {
        this.closest('tr').remove();
      }
    });
  });
  document.querySelectorAll('.table-btn.edit').forEach(btn => {
    if (btn.textContent === 'Zmień status') {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        const tr = this.closest('tr');
        const statusCell = tr.querySelectorAll('td')[4];

        if (statusCell) {
          const statuses = ['W realizacji', 'Wysłane', 'Dostarczone', 'Anulowane', 'Oczekujące'];
          let currentIndex = statuses.indexOf(statusCell.textContent.trim());
          let nextIndex = (currentIndex + 1) % statuses.length;
          statusCell.textContent = statuses[nextIndex];
        }
      });
    }
  });
  const adminForm = document.querySelector('.admin-form');
  if (adminForm) {
    adminForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Sukces! Dane produktu zostały zapisane w panelu administratora.');
    });
  }
});