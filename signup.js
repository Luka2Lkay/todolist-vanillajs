const username = document.querySelector(".username");
const password = document.querySelector(".password");
const password2 = document.querySelector(".password2");
const registerBtn = document.getElementById("register");
const passwordsNotMatching = document.getElementById("passwords-not-matching");

let allUsers = [];
allUsers = JSON.parse(localStorage.getItem('users')) ? JSON.parse(localStorage.getItem('users')) : []

const register = () => {

  if (allUsers.some((v) => {
    return v.username == username.value
  })){
   alert ('duplicate data')
  } else {
    allUsers.push({
      'username': username.value,
      'password': password.value
    })
    localStorage.setItem('users', JSON.stringify(allUsers))
  }
};



registerBtn.addEventListener("click", register);


