const username = document.querySelector(".username");
const password = document.querySelector(".password");
const password2 = document.querySelector(".password2");
const registerBtn = document.getElementById("register");
const passwordsNotMatching = document.getElementById("passwords-not-matching");
const usernameExists = document.getElementById("username-exists");

let allUsers = [];
allUsers = JSON.parse(localStorage.getItem("users"))
  ? JSON.parse(localStorage.getItem("users"))
  : [];

const register = () => {
  const userLogins = {
    username: username.value,
    password: password.value,
  };

  const checkInfo = allUsers.some((userObject) => {
    return userObject.username == username.value;
  });

  if (checkInfo === false) {
    allUsers.push(userLogins);
    window.location.href = "list.html";
    localStorage.setItem("allUsers", JSON.stringify(allUsers));
  } else {
    usernameExists.textContent = "the username exists";
    usernameExists.style.color = "red";
    password.value = "";
    password2.value = "";
  }
};

// const getAllUsers = () => {
//   const userInfo = JSON.parse(localStorage.getItem("users"));

//   usernameDiv.textContent = userInfo

//     };

//   getAllUsers()

registerBtn.addEventListener("click", register);
