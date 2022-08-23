// Selectors
var todoInput = document.querySelector(".todo-input");
var btn = document.querySelector("button");
var todolist = document.querySelector(".todo-list");

//Event Handlers
btn.onclick = create;

// Array
var arr = [];

//Functions
function create(e) {
  if (todoInput.value != "") {
    e.preventDefault();

    var newDiv = document.createElement("div");
    newDiv.classList.add("todo");

    var newLi = document.createElement("li");
    newLi.classList.add("todo-item");
    newLi.innerHTML = todoInput.value;
    newDiv.appendChild(newLi);

    var cmpltbtn = document.createElement("button");
    cmpltbtn.classList.add("cmplt-btn");
    cmpltbtn.innerHTML = '<i class="fa fa-check"></i>';
    newDiv.appendChild(cmpltbtn);

    var deletebtn = document.createElement("button");
    deletebtn.classList.add("delete-btn");
    deletebtn.innerHTML = '<i class="fa fa-trash"></i>';
    newDiv.appendChild(deletebtn);
    todolist.appendChild(newDiv);

    arr.push(todoInput.value);
    localStorage.setItem("list", arr);

    todoInput.value = "";
    // location.reload();
  } else {
    alert("Input Field Can't Be Blank");
  }
}

window.onload = fetch;
function fetch() {
  arr = [];
  if (!localStorage.getItem("list") == "") {
    arr = localStorage.getItem("list");
    arr = arr.split(",");
  }
  display(arr);
}
function display() {
  arr.forEach((element) => {
    let v = element;

    var newDiv = document.createElement("div");
    newDiv.classList.add("todo");

    var newLi = document.createElement("li");
    newLi.classList.add("todo-item");
    newLi.innerHTML = v;
    newDiv.appendChild(newLi);

    var cmpltbtn = document.createElement("button");
    cmpltbtn.classList.add("cmplt-btn");
    cmpltbtn.innerHTML = '<i class="fa fa-check"></i>';
    newDiv.appendChild(cmpltbtn);

    var deletebtn = document.createElement("button");
    deletebtn.classList.add("delete-btn");
    deletebtn.innerHTML = '<i class="fa fa-trash"></i>';
    newDiv.appendChild(deletebtn);
    todolist.appendChild(newDiv);

    cmpltbtn.onclick = check;
    deletebtn.onclick = del;
  });
}

function check(e) {
  var item = e.target;
  var parentNode = item.parentElement;
  parentNode.classList.toggle("checked");
}
function del(e) {
  var item = e.target;
  var parentNode = item.parentElement;
  var v = parentNode.children[0];
  parentNode.parentElement.remove(v);
  arr.pop(v);
  localStorage.setItem("list", arr);
  // location.reload();
}
