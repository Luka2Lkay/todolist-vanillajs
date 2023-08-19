const logoutLink = document.getElementById("logout");
const usernameDiv = document.getElementById("username");
const tableRows = document.getElementById("table-rows");
const newItemButton = document.getElementById("new-item-button");
const newItemForm = document.getElementById("new-item-form");
const tableData = document.getElementById("table-data");
const addItemButton = document.getElementById("add-item-button");
const title = document.getElementById("title");
const description = document.getElementById("description");
const dueDate = document.getElementById("due-date");

let id = JSON.parse(localStorage.getItem("id"))
  ? JSON.parse(localStorage.getItem("id"))
  : 0;

const getInfo = () => {
  const userLogins = JSON.parse(localStorage.getItem("userLogins"));
  usernameDiv.textContent = userLogins.username;
};

getInfo();

const logout = () => {
  localStorage.removeItem("userLogins");
  window.location.href = "./index.html";
};

let records = JSON.parse(localStorage.getItem("records"))
  ? JSON.parse(localStorage.getItem("records"))
  : [];

const getList = () => {
  localStorage.setItem("records", JSON.stringify(records));

  let rows = "";

  records.map((record) => {
    rows += `<tr>
    <td>${record.id}</td>
    <td>${record.title}</td>
    <td>${record.description}</td>
    <td>${record.dueDate}</td>
    <td class="d-flex justify-content-between">
    <i class="bi bi-eye"></i>
    <i class="bi bi-pencil" id="edit" onClick = editItem(${record.id})></i>
    <i class="bi bi-trash" id="delete"></i>
    </td>
    </tr>`;
  });

  tableRows.innerHTML = rows;
};

window.addEventListener("DOMContentLoaded", getList);

const showAddItemForm = () => {
  newItemForm.style.display = "block";
  tableData.style.display = "none";
  newItemButton.style.display = "none";
};

const addItem = () => {
  id++;
  localStorage.setItem("id", JSON.stringify(id));

  const record = {
    id: id,
    title: title.value,
    description: description.value,
    dueDate: dueDate.value,
  };

  records.push(record);

  newItemForm.style.display = "none";
  tableData.style.display = "block";

  getList();
  window.location.reload();
  alert(new Date());
};

const editItem = (id) => {
  newItemForm.style.display = "block";
  const object = records.find((record) => record.id === id);

  title.value = object.title;
  description.value = object.description;
  dueDate.value = object.dueDate;
};

const updateItem = () => {
  
}

addItemButton.addEventListener("click", addItem);
newItemButton.addEventListener("click", showAddItemForm);
logoutLink.addEventListener("click", logout);
