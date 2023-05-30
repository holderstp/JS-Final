var students = [
  { firstname: "Tran Thi minh", lastName: "Thuy", studentCode: "B16DCXXYYY" },
  { firstname: "Le Thuy", lastName: "Trang", studentCode: "B17DCXXYYY" },
  { firstname: "Vu Thanh", lastName: "Loan", studentCode: "B18DCXXYYY" },
  { firstname: "Dam Thi", lastName: "Thu", studentCode: "B19DCXXYYY" },
];
var tbody = document.querySelector("tbody");
var formstudent = document.querySelector(".form-student");
var addStudent = document.querySelector(".add-student");
var btnList = document.querySelector(".btn-list");
var inputList = document.querySelector(".input-list");

function renderStudentList() {
  var template = "";
  for (var i = 0; i < students.length; i++) {
    var studentlist = `<tr class="todo-item"  >
  <td class='todo-order-number'>${i + 1}</td>
  <td>${students[i].firstname}</td>
  <td>${students[i].lastName}</td>
  <td>${students[i].studentCode}</td>
  <td class="text-center">
    <button class="delete-btn"><i class="fas fa-trash"></i></button>
  </td>
</tr>`;
    template += studentlist;
  }

  tbody.innerHTML = template;
}

// delete student
tbody.addEventListener("click", function (e) {
  // console.log(e.target);
  var target = e.target;
  if (target.matches("i.fa-trash") || target.matches("button.delete-btn")) {
    var tr = target.closest("tr");
    var index = tr.querySelector("td.todo-order-number").innerText;
    students.splice(index - 1, 1);
    renderStudentList();
    return;
  }
});

// create form
var header = document.createElement("h1");
header.textContent = " Add Student";
var firstName = document.createElement("input");
firstName.placeholder = "Firstname";
var lastName = document.createElement("input");
lastName.placeholder = "Lastname";
var code = document.createElement("input");
code.placeholder = "Student code";
var createBtn = document.createElement("button");
createBtn.textContent = "Creat student";
createBtn.setAttribute("class", "createBtn");

var clearBtn = document.createElement("button");
clearBtn.textContent = "Clear";
clearBtn.setAttribute("class", "clearBtn");
var cancelBtn = document.createElement("button");
cancelBtn.textContent = "Cancel";
cancelBtn.setAttribute("class", "cancelBtn");

addStudent.addEventListener("click", function () {
  inputList.appendChild(header);
  inputList.appendChild(firstName);
  inputList.appendChild(lastName);
  inputList.appendChild(code);
  btnList.appendChild(createBtn);
  btnList.appendChild(clearBtn);
  btnList.appendChild(cancelBtn);
});

//create student

function addnewStudent() {
  var firstNameInput = firstName.value.trim();

  var lastNameInput = lastName.value.trim();
  var codeInput = code.value.trim();
  console.log(firstNameInput);
  console.log(lastNameInput);
  console.log(codeInput);
  if (firstNameInput !== "" && lastNameInput !== "" && codeInput !== "") {
    var studentNew = {
      firstname: firstNameInput,
      lastName: lastNameInput,
      studentCode: codeInput,
    };
    students.push(studentNew);
    firstName.value = "";
    lastName.value = "";
    code.value = "";
    renderStudentList();
    inputList.removeChild(header);
    inputList.removeChild(firstName);
    inputList.removeChild(lastName);
    inputList.removeChild(code);
    btnList.removeChild(createBtn);
    btnList.removeChild(clearBtn);
    btnList.removeChild(cancelBtn);
  }
}

createBtn.addEventListener("click", function (e) {
  e.preventDefault();
  addnewStudent();
});

// clear
clearBtn.addEventListener("click", function (e) {
  e.preventDefault();
  firstName.value = "";
  lastName.value = "";
  code.value = "";
});
//cancel
cancelBtn.addEventListener("click", function () {
  inputList.removeChild(header);
  inputList.removeChild(firstName);
  inputList.removeChild(lastName);
  inputList.removeChild(code);
  btnList.removeChild(createBtn);
  btnList.removeChild(clearBtn);
  btnList.removeChild(cancelBtn);
  firstName.value = "";
  lastName.value = "";
  code.value = "";
});
renderStudentList();
