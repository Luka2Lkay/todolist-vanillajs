const username = document.querySelector(".username");
const password = document.querySelector(".password");
const loginBtn = document.getElementById("login");
const incorrectDetails = document.getElementById("incorrect-details")

const allUsers = JSON.parse(localStorage.getItem("allUsers"))
  ? JSON.parse(localStorage.getItem("allUsers"))
  : [];

const login = () => {
  const userLogins = {
    username: username.value,
    password: password.value,
  };

  const checkInfo = allUsers.some((object) => {
    return (
      object.username === username.value && object.password === password.value
    );
  });

  if (checkInfo) {
    localStorage.setItem("userLogins", JSON.stringify(userLogins));
    window.location.href = "./list.html";
  } else {
    incorrectDetails.textContent = "Incorrect username or password";
    incorrectDetails.style.color = "red";
    password.value = ''
  }
};

const getInfo = () => {
  JSON.parse(localStorage.getItem("userLogins"));
};

const removeErrors = () => {
  incorrectDetails.textContent = "";
}

username.addEventListener('click', removeErrors)
password.addEventListener('click', removeErrors)

getInfo();

loginBtn.addEventListener("click", login);
