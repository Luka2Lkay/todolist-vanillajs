const username = document.querySelector(".username");
const password = document.querySelector(".password");
const loginBtn = document.getElementById("login");

let allUsers = JSON.parse(localStorage.getItem('allUsers')) ? JSON.parse(localStorage.getItem('allUsers')) :[]

const login = () => {
  const userInfo = {
    username: username.value,
    password: password.value,
  };

  const checkInfo = allUsers.some((object) => {
    return object.username === username.value && object.password === password.value
  })

if (checkInfo) {
  localStorage.setItem("userInfo", JSON.stringify(userInfo));
  window.location.href = "./list.html";
}  


};

const getInfo = () => {
  JSON.parse(localStorage.getItem("userInfo"));
};

getInfo();
loginBtn.addEventListener("click", login);
