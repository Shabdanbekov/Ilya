let btn = document.querySelector(".login-btn");
let messNote = document.getElementById("notification");
let loginInput = document.getElementById("login");
let passwordInput = document.getElementById("password1");
let passwordInput2 = document.getElementById("Reppassword");
let clickEye = document.querySelector("#click__eye");
let clickEye2 = document.querySelector("#click__eye2");

let loginRegExp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
let passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

loginInput.addEventListener("input", (event) => {
  event.preventDefault();

  if (loginInput === "" || passwordInput === "") {
    messNote.innerHTML = "Введите ваши данные";
    messNote.classList.add("enterData");
    return;
  }
  if (loginRegExp.test(loginInput.value)) {
    messNote.innerHTML = "Теперь введите пароль";
    messNote.style.color = "green";
  } else {
    messNote.innerHTML = "Неправильный логин!";
    messNote.style.color = "red";
  }
});

passwordInput.addEventListener("input", (event) => {
  event.preventDefault();

  if (passwordRegExp.test(passwordInput.value)) {
    messNote.innerHTML = "Потвердите пароль";
    messNote.style.color = "yellow";
    return;
  } else {
    messNote.innerHTML = "Неправильный пароль!";
    messNote.style.color = "red";
  }
});

passwordInput2.addEventListener("input", (e) => {
  e.preventDefault();

  if (passwordInput2.value !== passwordInput.value) {
    messNote.innerHTML = "Пароль не совпадает";
    messNote.style.color = "red";
    return;
  } else {
    messNote.innerHTML = "Успешно";
    messNote.style.color = "green";
  }
});

clickEye.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});
clickEye2.addEventListener("click", () => {
  if (passwordInput2.type === "password") {
    passwordInput2.type = "text";
  } else {
    passwordInput2.type = "password";
  }
});
