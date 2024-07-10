let selectedRow = null;
const btnUp = document.querySelector(".btnup");
const btnAdd = document.querySelector(".btnadd");
document.querySelector(".btnup").style.display = "none";
document.querySelector(".auto").style.display = "none";
const uniqueValues = new Set();

function addUniqueValue(value) {
  if (!uniqueValues.has(value)) {
    uniqueValues.add(value);
    alert(`Added ${value} to the set.`);
  } else {
    alert(`${value} already exists in the set. Not added.`);
    uniqueValues.none(!value);
    return;
  }
}

btnAdd.addEventListener("click", function () {
  const name = document.querySelector("#name").value;
  const age = document.querySelector("#age").value;
  const gender = document.querySelector("#gender").value;
  const email = document.querySelector("#email").value;
  const province = document.querySelector("#province").value;

  if (!name || !age || !gender || !email || !province) {
    alert("Please fill in all fields!!!");
    return;
  } else {
    alert("Successfully added");
  }

  addUniqueValue(email);

  const table = document.querySelector("table tbody");
  const newRow = table.insertRow();

  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  const cell4 = newRow.insertCell(3);
  const cell5 = newRow.insertCell(4);
  const cell6 = newRow.insertCell(5);

  cell1.innerHTML = name;
  cell2.innerHTML = age;
  cell3.innerHTML = gender;
  cell4.innerHTML = email;
  cell5.innerHTML = province;
  cell6.innerHTML = `<button onclick="editRow(this)" class="btn btn-primary">Edit</button>
                          <button onclick="deleteRow(this)" class="btn btn-danger">Delete</button>`;

  document.getElementById("information").reset();
  document.querySelector(".btnadd").style.display = "";
  document.querySelector(".btnup").style.display = "none";
});

function editRow(td) {
  selectedRow = td.parentElement.parentElement;
  document.querySelector("#name").value = selectedRow.cells[0].innerHTML;
  document.querySelector("#age").value = selectedRow.cells[1].innerHTML;
  document.querySelector("#gender").value = selectedRow.cells[2].innerHTML;
  document.querySelector("#email").value = selectedRow.cells[3].innerHTML;
  document.querySelector("#province").value = selectedRow.cells[4].innerHTML;

  document.querySelector(".btnadd").style.display = "none";
  document.querySelector(".btnup").style.display = "";
}

btnUp.addEventListener("click", function () {
  const name = document.querySelector("#name").value;
  const age = document.querySelector("#age").value;
  const gender = document.querySelector("#gender").value;
  const email = document.querySelector("#email").value;
  const province = document.querySelector("#province").value;

  if (!name || !age || !gender || !email || !province) {
    alert("Please fill in all fields!!!");
    return;
  }

  // function updata(value) {
  //   if (!uniqueValues.has(value)) {
  //     uniqueValues.add(value);
  //     alert(`Added ${value} to the set.`);
  //   } else {
  //     alert(`${value} already exists in the set. Not added.`);
  //     uniqueValues.none(!value);
  //     return;
  //   }
  // }
  // updata(email);

  selectedRow.cells[0].innerHTML = name;
  selectedRow.cells[1].innerHTML = age;
  selectedRow.cells[2].innerHTML = gender;
  selectedRow.cells[3].innerHTML = email;
  selectedRow.cells[4].innerHTML = province;

  document.querySelector("#information").reset();
  document.querySelector(".btnadd").style.display = "";
  document.querySelector(".btnup").style.display = "none";
});

function deleteRow(td) {
  if (confirm("Are you sure you want to delete?")) {
    const row = td.parentElement.parentElement;
    document.querySelector("table").deleteRow(row.rowIndex);
  }
}
