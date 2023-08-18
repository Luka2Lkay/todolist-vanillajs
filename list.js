const logoutLink = document.getElementById("logout");
const usernameDiv = document.getElementById("username");
const tableRows = document.getElementById("table-rows");
const newItemButton = document.getElementById("new-item")

const getInfo = () => {
  const userLogins = JSON.parse(localStorage.getItem("userLogins"));
  usernameDiv.textContent = userLogins.username;
};

getInfo();

const logout = () => {
  localStorage.removeItem("userLogins");
  window.location.href = "./index.html";
};

let records = [
  { id: 1, title: "study", description: "coding", dueDate: "01/02/2024" },
];

const getList = () => {
  localStorage.setItem("records", JSON.stringify(records));

  records = JSON.parse(localStorage.getItem("records"));

  let rows = "";

  records.map((record) => {
    rows += `<tr>
    <td>${record.id}</td>
    <td>${record.title}</td>
    <td>${record.description}</td>
    <td>${record.dueDate}</td>
    <td class="d-flex justify-content-between">
    <i class="bi bi-eye"></i>
    <i class="bi bi-pencil" id="edit"></i>
    <i class="bi bi-trash" id="delete"></i>
    </td>
    </tr>`;
  });

  tableRows.innerHTML = rows;
};

window.addEventListener("DOMContentLoaded", getList);

logoutLink.addEventListener("click", logout);
