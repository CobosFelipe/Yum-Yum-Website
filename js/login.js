const btnChangeForm = document.getElementById("bt-changeForm");
const formLoginChange = document.getElementById("login-form");
const registerFormChange = document.getElementById("register-form")


btnChangeForm.addEventListener('click', (e) => {
  // Agregar un pequeño retraso para permitir que las clases se eliminen antes de aplicar la transición
  setTimeout(() => {
    formLoginChange.classList.toggle("d-none");
    registerFormChange.classList.toggle("d-none");
  }, 0);
});