const logoutLink = document.getElementById("logout");

const usernameDiv = document.getElementById("username");

const getUserLogins = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  usernameDiv.textContent = user.username
};

getUserLogins();

// const getInfo = () => {
//   const userInfo = JSON.parse(localStorage.getItem("userInfo"));

//   usernameDiv.textContent = userInfo.username;
// };

// getInfo();

const logout = () => {
  window.location.href = "./index.html";
  localStorage.removeItem('user')
};

logoutLink.addEventListener("click", logout);
