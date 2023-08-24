const logoutLink = document.getElementById("logout");
const usernameDiv = document.getElementById("username");
let tableRows = document.getElementById("table-rows");
const newItemButton = document.getElementById("new-item-button");
const addNewItemForm = document.getElementById("add-new-item-form");
const updateItemForm = document.getElementById("update-item-form");
const tableData = document.getElementById("table-data");
const addItemButton = document.getElementById("add-item-button");
const updateItemButton = document.getElementById("update-item-button");
const title = document.getElementById("title");
const updateTitle = document.getElementById("update-title");
const description = document.getElementById("description");
const updateDescription = document.getElementById("update-description");
const dueDate = document.getElementById("due-date");
const updateDueDate = document.getElementById("update-due-date");
const searchInput = document.getElementById("search-input");

const userLogins = JSON.parse(localStorage.getItem("userLogins"));
const getInfo = () => {
  usernameDiv.textContent = userLogins.username;
};

if (userLogins === null) {
  window.location.href = "./index.html";
}

getInfo();

const logout = () => {
  localStorage.removeItem("userLogins");
  window.location.href = "./index.html";
};

let records = JSON.parse(localStorage.getItem("records"))
  ? JSON.parse(localStorage.getItem("records"))
  : [];

let id = JSON.parse(localStorage.getItem("id"))
  ? JSON.parse(localStorage.getItem("id"))
  : 0;


const getList = () => {
  localStorage.setItem("records", JSON.stringify(records));
  let index = records.findIndex((record) => record.id);
  let rows = "";

  records.map((record) => {
    index++;

    rows += `<tr>
    <td>${index}</td>
    <td>${record.title}</td>
    <td>${record.description}</td>
    <td>${record.dueDate}</td>
    <td class="d-flex justify-content-between">
    <i class="bi bi-eye"></i>
    <i class="bi bi-pencil" id="edit" onClick = editItem(${record.id})></i>
    <i class="bi bi-trash" id="delete" onClick = deleteItem(${record.id})></i>
    </td>
    </tr>`;
  });

  tableRows.innerHTML = rows;
};

window.addEventListener("DOMContentLoaded", getList);

const deleteItem = (id) => {
  const index = records.findIndex((record) => record.id == id);

  records.splice(index, 1);

  getList();
};

const showAddItemForm = () => {
  addNewItemForm.style.display = "block";
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

  records.unshift(record);

  addNewItemForm.style.display = "none";
  tableData.style.display = "block";

  getList();
  window.location.reload();
};

const editItem = (id) => {
  const idInput = document.getElementById("update-id");
  updateItemForm.style.display = "block";
  tableData.style.display = "none";
  const object = records.find((record) => record.id === id);

  updateTitle.value = object.title;
  updateDescription.value = object.description;
  updateDueDate.value = object.dueDate;
  idInput.value = object.id;
};

const updateItem = () => {
  const idInputValue = document.getElementById("update-id").value;
  const updateTitleValue = updateTitle.value;
  const updateDescriptionValue = updateDescription.value;
  const updateDueDateValue = updateDueDate.value;

  const index = records.findIndex(
    (record) => record.id === Number(idInputValue)
  );

  records[index] = {
    id: idInputValue,
    title: updateTitleValue,
    description: updateDescriptionValue,
    dueDate: updateDueDateValue,
  };

  updateItemForm.style.display = "none";
  tableData.style.display = "block";

  localStorage.setItem("records", JSON.stringify(records));
  window.location.reload();
  getList();
};

const filter = () => {
  const inputValue = searchInput.value.toLowerCase();

  const filtered = records.filter((record) => {
    record = record.title.toLowerCase();

    return record.indexOf(inputValue) > -1;
  });

  return filtered;
};

const search = () => {
  const inputValue = searchInput.value.toLowerCase();
let index = 0
  const filtered = records.filter((record) => {
    record = record.title.toLowerCase();

    return record.indexOf(inputValue) > -1;
  });

  let row = "";

  filtered.map((filter) => {
    index++
    row += `<tr><td>${index}</td>
    <td>${filter.title}</td>
    <td>${filter.description}</td>
    <td>${filter.dueDate}</td>
    <td class="d-flex justify-content-between">
    <i class="bi bi-eye" onClick = view(${filter.id})></i>
    <i class="bi bi-pencil" id="edit" onClick = editItem(${filter.id})></i>
    <i class="bi bi-trash" id="delete" onClick = deleteItem(${filter.id})></i>
    </td>
    </tr>`;
  });

  tableRows.innerHTML = row;

  if (inputValue === "") {
    window.location.reload();
  }
};



searchInput.addEventListener("keyup", search);
updateItemButton.addEventListener("click", updateItem);
addItemButton.addEventListener("click", addItem);
newItemButton.addEventListener("click", showAddItemForm);
logoutLink.addEventListener("click", logout);
