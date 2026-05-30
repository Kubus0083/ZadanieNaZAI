document.addEventListener('DOMContentLoaded', () => {
  const authForm = document.querySelector('.auth-container form');
  if (authForm) {
    authForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const passwordInputs = authForm.querySelectorAll('input[type="password"]');
      if (passwordInputs.length === 2) {
        const pass = passwordInputs[0].value;
        const confirmPass = passwordInputs[1].value;
        if (pass !== confirmPass) {
          alert('Błąd: Podane hasła nie są identyczne!');
          return;
        }
      }

      alert('Zarejestrowano');
    });
  }
});