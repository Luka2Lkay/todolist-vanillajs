const username = document.querySelector(".username");
const password = document.querySelector(".password");
const password2 = document.querySelector(".password2");
const registerBtn = document.getElementById("register");
const passwordsNotMatching = document.getElementById("passwords-not-matching");

const register = () => {
  if (password.value !== password2.value) {
    passwordsNotMatching.textContent = "Passwords don't match";
  } else {
    window.location.assign("list.html");
  }
};

registerBtn.addEventListener("click", register);
