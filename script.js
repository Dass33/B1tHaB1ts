let itemsArrayDaili = localStorage.getItem('dailiList') ?
JSON.parse(localStorage.getItem('dailiList')) : [];
for(var i = 0; i < itemsArrayDaili.length; i++){
  console.log(itemsArrayDaili[i]);
  addTask(itemsArrayDaili[i], "dailiUL");
}

let itemsArrayTodos = localStorage.getItem('sprintList') ?
JSON.parse(localStorage.getItem('sprintList')) : [];
var i;
for (i = 0; i < itemsArrayTodos.length; i++){
  addTask(itemsArrayTodos[i], "sprintUL");
}

function addTask(text, ulToPaste){
  const li = document.createElement('li');
  var t = document.createTextNode(text);
  li.appendChild(t);
  li.className = "liColumns";
  document.getElementById(ulToPaste).appendChild(li);
}

var myNodelist = document.getElementsByClassName("liColumns");
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
    newElement("input-daili", "dailiUL", "dailiList");
    }
});

document.getElementById("input-todos").addEventListener('keydown', function(event){
    if  (event.key === 'Enter') {
    newElement("input-todos", "sprintUL", "sprintList");
    }
});

// Create a new list item when clicking on the "Add" button
function newElement(inputColumn, columnUL, localStorageVal) {
  var li = document.createElement("li");
  var inputValue = document.getElementById(inputColumn).value;
  var t = document.createTextNode(inputValue);

  // Adding to local storage
  var itemsArray = localStorage.getItem(localStorageVal) ?
  JSON.parse(localStorage.getItem(localStorageVal)) : [];
  itemsArray.push(inputValue);
  localStorage.setItem(localStorageVal, JSON.stringify(itemsArray));
  //

  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    li.className = "liColumns";
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