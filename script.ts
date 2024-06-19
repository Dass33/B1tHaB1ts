let dailiElement = localStorage.getItem('dailiList');
let itemsArrayDaili = dailiElement ? JSON.parse(dailiElement) : [];
for (var i = 0; i < itemsArrayDaili.length; i++) {
  console.log(itemsArrayDaili[i]);
  addTask(itemsArrayDaili[i], "dailiUL");
}

let todosElement = localStorage.getItem('sprintList');
let itemsArrayTodos = todosElement ? JSON.parse(todosElement) : [];
var i: number;
for (i = 0; i < itemsArrayTodos.length; i++) {
  addTask(itemsArrayTodos[i], "sprintUL");
}

function addTask(text: string, ulToPaste: string) {
  const li = document.createElement('li');
  var t = document.createTextNode(text);
  li.appendChild(t);
  li.className = "liColumns";
  document.getElementById(ulToPaste)?.appendChild(li);
}

var myNodelist = document.getElementsByClassName("liColumns");
var i: number;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("X");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

const listItems = Array.from(document.getElementsByClassName("liColumns"));
listItems.forEach(function(item) {
  item.addEventListener('click', function() {
    this.classList.add('checkOffAnim');
    setTimeout(() => {
      this.remove();
    }, 300);
  });
});

// Click on a close button to hide the current list item
var closeElements = document.getElementsByClassName("close");
var i: number;
for (i = 0; i < closeElements.length; i++) {
  closeElements[i].onclick = function() {
    this.parentElement.remove();
  }
}

document.getElementById("input-daili")?.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    newElement("input-daili", "dailiUL", "dailiList");
  }
});

document.getElementById("input-todos")?.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    newElement("input-todos", "sprintUL", "sprintList");
  }
});

// Create a new list item when clicking on the "Add" button
function newElement(inputColumn: string, columnUL: string, localStorageVal: string) {
  var li = document.createElement("li");
  var inputValue = document.getElementById(inputColumn) as HTMLInputElement;
  var t = document.createTextNode(inputValue.value);

  // Adding to local storage
  let storedData = localStorage.getItem(localStorageVal);
  var itemsArray = storedData ? JSON.parse(storedData) : [];
  itemsArray.push(inputValue);
  localStorage.setItem(localStorageVal, JSON.stringify(itemsArray));
  //

  li.appendChild(t);
  if (!inputValue) {
    alert("You must write something!");
  } else {
    li.className = "liColumns";
    document.getElementById(columnUL)?.appendChild(li);
  }
  inputValue.value = "";

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
