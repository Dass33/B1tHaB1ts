function newElement(inputColumn: string, columnUL: string, localStorageVal: string) {
  let li = document.createElement("li");
  let inputValue = document.getElementById(inputColumn) as HTMLInputElement;
  let t = document.createTextNode(inputValue.value);

  li.appendChild(t);
  if (!inputValue.value) {
    alert("You must write something!");
    return;
  } else {
    li.className = "liColumns";
    document.getElementById(columnUL)?.appendChild(li);
  }

  let span = document.createElement("span");
  let txt = document.createTextNode("X");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  closeOnClick();
  let listItems = document.querySelectorAll('li');
  listItems.forEach(function(item) {
    item.addEventListener('click', function() {
      item.classList.add('checkOffAnim');
      setTimeout(() => {
        item.remove();
      }, 300);
    });
  });

  li.setAttribute('locatedIn', localStorageVal);

  // Adding to local storage
  let storedData = localStorage.getItem(localStorageVal);
  let itemsArray = storedData ? JSON.parse(storedData) : [];
  itemsArray.push(inputValue.value);
  localStorage.setItem(localStorageVal, JSON.stringify(itemsArray));
  //

  inputValue.value = "";
}
// Click on a close button to hide the current list item
function closeOnClick() {
  let closeElements = Array.from(document.getElementsByClassName("close"));
  for (let element of closeElements) {
    (element as HTMLElement).onclick = function() {
      if (element.parentElement) {
        let locatedIn = element.parentElement.getAttribute('locatedIn');
        if (locatedIn) {
          let storedData = localStorage.getItem(locatedIn);
          let itemsArray = storedData ? JSON.parse(storedData) : [];
          //implement deleting of the element from the array
          let value = element.parentElement.firstChild?.nodeValue;
          let index = itemsArray.indexOf(value);
          itemsArray.splice(index, 1);
          localStorage.setItem(locatedIn, JSON.stringify(itemsArray));
        }
        element.parentElement.remove();
      }
    }
    let currentBorderColor: string;
    let closeColor = getComputedStyle(document.body).getPropertyValue('--closeHover');
    element.addEventListener('mouseover', function() {
      if (element.parentElement) {
        currentBorderColor = element.parentElement.style.borderColor;
        element.parentElement.style.borderColor = closeColor;
      }
    });
    element.addEventListener('mouseout', function() {
      if (element.parentElement) {
        element.parentElement.style.borderColor = currentBorderColor;
      }
    });
  }
}

function addTask(text: string, ulToPaste: string, localStorageVal: string) {
  const li = document.createElement('li');
  let t = document.createTextNode(text);
  li.appendChild(t);
  li.className = "liColumns";
  li.setAttribute('locatedIn', localStorageVal);
  document.getElementById(ulToPaste)?.appendChild(li);
}

let dailiElement = localStorage.getItem('dailiList');
let itemsArrayDaili = dailiElement ? JSON.parse(dailiElement) : [];
for (let dailies of itemsArrayDaili) {
  addTask(dailies, "dailiUL", 'dailiList');
}

let todosElement = localStorage.getItem('sprintList');
let itemsArrayTodos = todosElement ? JSON.parse(todosElement) : [];
for (let todo of itemsArrayTodos) {
  addTask(todo, "sprintUL", 'sprintList');
}

var myNodelist = Array.from(document.getElementsByClassName("liColumns"));
for (let nodes of myNodelist) {
  let span = document.createElement("span");
  let txt = document.createTextNode("X");
  span.className = "close";
  span.appendChild(txt);
  nodes.appendChild(span);
}

const listItems = Array.from(document.getElementsByClassName("liColumns"));
listItems.forEach(function(item) {
  item.addEventListener('click', function() {
    item.classList.add('checkOffAnim');
    setTimeout(() => {
      item.remove();
    }, 300);
  });
});

closeOnClick();

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
