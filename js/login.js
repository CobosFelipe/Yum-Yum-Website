//Capturar los form
const signInForm = document.getElementById("SignInFormData");
const signUpForm = document.getElementById("SignUpFormData");

//Capturar los elementos inputs del form inicio de sesión
const loginEmailInput = document.getElementById("username");
const loginPasswordInput = document.getElementById("password");

//Capturar los elementos inputs del form registro
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");
const newPasswordInput = document.querySelector("#newPassword");
const confirmPasswordinput = document.querySelector("#ConfirmPassword");

//LocalStorage
const usersJson = "http://127.0.0.1:5500/json/users.json";
const nombreVariable = []; 
fetch(usersJson)
  .then((response) => response.json())
  .then((data) => {
    localStorage.setItem('usuarios',JSON.stringify(data.Users));
  })
  .catch((error) => {
    console.log("error consumiendo la api");
});

//Expresion regular
const validationName = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
const validationPhone = /^\d{7,10}$/;
const validationEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const validationPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/g;
const validationEmailLogin =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


function validName(name) {
  if (!validationName.test(name.value)) {
    name.classList.add("is-invalid");
    name.classList.remove("is-valid");
  } else{
    name.classList.add("is-valid");
    name.classList.remove("is-invalid");
  }
} 

function validPhone(phone) {
  if (!validationPhone.test(phone.value)) {
    phone.classList.add("is-invalid");
    phone.classList.remove("is-valid");
  } else{
    phone.classList.add("is-valid");
    phone.classList.remove("is-invalid");
  }
}

function validEmail(email) {
  if (!validationEmail.test(email.value)) {
    email.classList.add("is-invalid");
    email.classList.remove("is-valid");
    return false;
  } else{
    email.classList.add("is-valid");
    email.classList.remove("is-invalid");
    return true;
  }
}

function validPassword (password) {
  if(!validationPassword.test(password.value)){
    password.classList.add("is-invalid");
    password.classList.remove("is-valid");
    return false;
  }
  else{
    password.classList.add("is-valid");
    password.classList.remove("is-invalid");
    return true;
  }
}

function validConfirm (password, password2) {
  if (!validationPassword.test(password2.value) || password.value !== password2.value) {
    password2.classList.add("is-invalid");
    password2.classList.remove("is-valid");
  }
  else{
    password2.classList.add("is-valid");
    password2.classList.remove("is-invalid")
  }
}
//Validaciones formulario de registro
signUpForm.addEventListener('submit', function(event) {
  event.preventDefault();
  event.stopPropagation();
  validName(nameInput);
  validPhone(phoneInput);
  validEmail(emailInput);
  validPassword(newPasswordInput);
  validConfirm(newPasswordInput, confirmPasswordinput);
})
//Validaciones formulario de inicio de sesión
signInForm.addEventListener('submit', function(event) {
  event.preventDefault();
  event.stopPropagation();
  validEmail(username);
  validPassword(password);
  if (validEmail(username) && validPassword(password)) {
    const usuariosAlmacenados = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioExistente = usuariosAlmacenados.find(user => user.email === loginEmailInput.value && user.password === loginPasswordInput.value)
    //Condicional para mostrar al usuario si su ingreso fue exitoso o no
    if (usuarioExistente) {
      setTimeout(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Se ha iniciado sesión exitosamente",
          showConfirmButton: false,
          timer: 2500,
        });
        window.location.href = "../index.html"
      }, "3500");
     
    } else{
      Swal.fire({
        position: "center",
        icon: "error",
        title: "El usuario no existe, por favor registrelo",
        showConfirmButton: false,
        timer: 2500,
      });
    }
  }
})

//EvenListener inputs inicio de sesión
username.addEventListener('input', () => {
  validEmail(username);
})
password.addEventListener('input', () => {
  validPassword(password);
})

//EventListener inputs registro
nameInput.addEventListener('input', () => {
  validName(nameInput);
})

phoneInput.addEventListener('input', () => {
  validPhone(phoneInput);
})

emailInput.addEventListener('input', () => {
  validEmail(emailInput);
})

newPasswordInput.addEventListener('input', () => {
  validPassword(newPasswordInput);
})

confirmPasswordinput.addEventListener('input', () => {
  validConfirm(newPasswordInput, confirmPasswordinput);
})

