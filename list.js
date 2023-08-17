const logoutLink = document.getElementById("logout")

const userEmail = document.getElementById("user-email")

// const getInfo = () => {
//     const userInfo = JSON.parse(localStorage.getItem("userInfo"));

// userEmail.textContent = userInfo.email

//   };
  
//   getInfo()

const logout = () => {
    // localStorage.clear()
    window.location.href = "./index.html"
}

  logoutLink.addEventListener('click', logout)

