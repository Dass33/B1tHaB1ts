var _a, _b;
var dailiElement = localStorage.getItem('dailiList');
var itemsArrayDaili = dailiElement ? JSON.parse(dailiElement) : [];
for (var i = 0; i < itemsArrayDaili.length; i++) {
    console.log(itemsArrayDaili[i]);
    addTask(itemsArrayDaili[i], "dailiUL");
}
var todosElement = localStorage.getItem('sprintList');
var itemsArrayTodos = todosElement ? JSON.parse(todosElement) : [];
var i;
for (i = 0; i < itemsArrayTodos.length; i++) {
    addTask(itemsArrayTodos[i], "sprintUL");
}
function addTask(text, ulToPaste) {
    var _a;
    var li = document.createElement('li');
    var t = document.createTextNode(text);
    li.appendChild(t);
    li.className = "liColumns";
    (_a = document.getElementById(ulToPaste)) === null || _a === void 0 ? void 0 : _a.appendChild(li);
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
var listItems = Array.from(document.getElementsByClassName("liColumns"));
listItems.forEach(function(item) {
    item.addEventListener('click', function() {
        var _this = this;
        this.classList.add('checkOffAnim');
        setTimeout(function() {
            _this.remove();
        }, 300);
    });
});
// Click on a close button to hide the current list item
var closeElements = document.getElementsByClassName("close");
var i;
for (i = 0; i < closeElements.length; i++) {
    closeElements[i].onclick = function() {
        this.parentElement.remove();
    };
}
(_a = document.getElementById("input-daili")) === null || _a === void 0 ? void 0 : _a.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        newElement("input-daili", "dailiUL", "dailiList");
    }
});
(_b = document.getElementById("input-todos")) === null || _b === void 0 ? void 0 : _b.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        newElement("input-todos", "sprintUL", "sprintList");
    }
});
// Create a new list item when clicking on the "Add" button
function newElement(inputColumn, columnUL, localStorageVal) {
    var _a;
    var li = document.createElement("li");
    var inputValue = document.getElementById(inputColumn);
    var t = document.createTextNode(inputValue.value);
    // Adding to local storage
    var storedData = localStorage.getItem(localStorageVal);
    var itemsArray = storedData ? JSON.parse(storedData) : [];
    itemsArray.push(inputValue);
    localStorage.setItem(localStorageVal, JSON.stringify(itemsArray));
    //
    li.appendChild(t);
    if (!inputValue) {
        alert("You must write something!");
    }
    else {
        li.className = "liColumns";
        (_a = document.getElementById(columnUL)) === null || _a === void 0 ? void 0 : _a.appendChild(li);
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
        };
    }
    var listItems = document.querySelectorAll('li');
    listItems.forEach(function(item) {
        item.addEventListener('click', function() {
            var _this = this;
            this.classList.add('checkOffAnim');
            setTimeout(function() {
                _this.remove();
            }, 300);
        });
    });
}
