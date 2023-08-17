const username = document.querySelector(".username");
const password = document.querySelector(".password");
const password2 = document.querySelector(".password2");
const registerBtn = document.getElementById("register");
const passwordsNotMatching = document.getElementById("passwords-not-matching");
const usernameExists = document.getElementById("username-exists");
const emptyFieldsMessage = document.getElementById("empty-fields-message");

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

  if (password.value !== password2.value) {
    passwordsNotMatching.textContent = "Passwords do not match!";
    return;
  } else if (
    password.value === "" ||
    password2.value === "" ||
    username.value === ""
  ) {
    emptyFieldsMessage.textContent = "Please fill all fields";
    emptyFieldsMessage.style.color = "red";
    return;
  }

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

const removeErrorMessages = () => {
  usernameExists.textContent = "";
  emptyFieldsMessage.textContent = "";
  passwordsNotMatching.textContent = "";
}

username.addEventListener('click', removeErrorMessages)
password.addEventListener('click', removeErrorMessages)
password2.addEventListener('click', removeErrorMessages)

const getInfo = () => {
  JSON.parse(localStorage.getItem("userLogins"));
};

getInfo();

registerBtn.addEventListener("click", register);
