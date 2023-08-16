const username = document.querySelector(".username");
const password = document.querySelector(".password");
const password2 = document.querySelector(".password2");
const registerBtn = document.getElementById("register");
const passwordsNotMatching = document.getElementById("passwords-not-matching");

const users = [];

const register = () => {


  const user = {
    'email': username.value,
    'password': password.value,
  };

  if (
    password.value === password2.value &&
    password.value !== "" &&
    password2.value !== ""
  ) {
    // alert(user)
    users.push(user);
    // localStorage.setItem("users", JSON.stringify(users));
    window.location.assign("list.html");
  } else {
    passwordsNotMatching.textContent = "Passwords don't match";
  }
};



registerBtn.addEventListener("click", register);


