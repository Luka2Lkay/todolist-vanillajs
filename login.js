const username = document.querySelector(".username");
const password = document.querySelector(".password");
const loginBtn = document.getElementById("login");

const login = () => {
  const userInfo = {
    'email': username.value,
    'password': password.value,
  };

  localStorage.setItem("userInfo", JSON.stringify(userInfo));
  window.location.href = "./list.html";
};

const getInfo = () => {
    JSON.parse(localStorage.getItem("userInfo"));
  };
  
  getInfo()
loginBtn.addEventListener("click", login);
