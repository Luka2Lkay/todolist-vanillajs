const logoutLink = document.getElementById("logout");

const usernameDiv = document.getElementById("username");

const getInfo = () => {
  const userLogins = JSON.parse(localStorage.getItem("userLogins"));

  usernameDiv.textContent = userLogins.username;
};

getInfo();

const logout = () => {
  localStorage.removeItem("userLogins");
  window.location.href = "./index.html";
};

logoutLink.addEventListener("click", logout);
