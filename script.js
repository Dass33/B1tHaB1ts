let itemsArrayDaili = localStorage.getItem('dailiList') ?
JSON.parse(localStorage.getItem('dailiList')) : [];
itemsArrayDaili.forEach(addTask);

let itemsArrayTodos = localStorage.getItem('sprintList') ?
JSON.parse(localStorage.getItem('sprintList')) : [];
var i;
for (i = 0; i < itemsArrayTodos.length; i++){
  itemsArrayTodos[i]
}
var ulToPaste = "SprintUL";

function addTask(text){
  const li = document.createElement('li');
  li.textContent = text;
  ulToPaste.appendChild(li);
}


var newListElement = document.createElement("li");
var t = document.createTextNode("hife");
newListElement.appendChild(t);
document.getElementById("dailiUL").appendChild(newListElement);

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("X");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var listItems = document.querySelectorAll('li');
listItems.forEach(function(item) {
    item.addEventListener('click', function() {
    this.classList.add('checkOffAnim');
    setTimeout(() => {
      this.remove();
    }, 300);
    });
});

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    this.parentElement.style.display = "none";
  }
}

document.getElementById("input-daili").addEventListener('keydown', function(event){
    if  (event.key === 'Enter') {
    newElement("input-daili", "dailiUL");
    }
});

document.getElementById("input-todos").addEventListener('keydown', function(event){
    if  (event.key === 'Enter') {
    newElement("input-todos", "sprintUL");
    }
});

// Create a new list item when clicking on the "Add" button
function newElement(inputColumn, columnUL) {
  var li = document.createElement("li");
  var inputValue = document.getElementById(inputColumn).value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById(columnUL).appendChild(li);
  }
  document.getElementById(inputColumn).value = "";

  var span = document.createElement("span");
  var txt = document.createTextNode("X");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      this.parentElement.style.display = "none";
    }
  }
  var listItems = document.querySelectorAll('li');
  listItems.forEach(function(item) {
      item.addEventListener('click', function() {
      this.classList.add('checkOffAnim');
      setTimeout(() => {
        this.remove();
      }, 300);
      });
  });
}