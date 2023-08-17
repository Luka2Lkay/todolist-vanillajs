const username = document.querySelector(".username");
const password = document.querySelector(".password");
const password2 = document.querySelector(".password2");
const registerBtn = document.getElementById("register");
const passwordsNotMatching = document.getElementById("passwords-not-matching");
const usernameExists = document.getElementById("username-exists");

const allUsers = JSON.parse(localStorage.getItem("allUsers"))
  ? JSON.parse(localStorage.getItem("allUsers"))
  : [];

const register = () => {
  const userLogins = {
    username: username.value,
    password: password.value,
  };

  const checkInfo = allUsers.some((userObject) => {
    return userObject.username === username.value;
  });

  if (!checkInfo) {
    allUsers.push(userLogins);
    window.location.href = "list.html";
    localStorage.setItem("allUsers", JSON.stringify(allUsers));
    localStorage.setItem("userLogins", JSON.stringify(userLogins));
  } else {
    usernameExists.textContent = "the username exists";
    usernameExists.style.color = "red";
    password.value = "";
    password2.value = "";
  }
};

const getInfo = () => {
  JSON.parse(localStorage.getItem("userLogins"));
};

getInfo();

registerBtn.addEventListener("click", register);
