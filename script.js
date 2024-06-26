var _a, _b;
function newElement(inputColumn, columnUL, localStorageVal) {
    var _a;
    var li = document.createElement("li");
    var inputValue = document.getElementById(inputColumn);
    var t = document.createTextNode(inputValue.value);
    li.appendChild(t);
    if (!inputValue.value) {
        alert("You must write something!");
        return;
    }
    else {
        li.className = "liColumns";
        (_a = document.getElementById(columnUL)) === null || _a === void 0 ? void 0 : _a.appendChild(li);
    }
    var span = document.createElement("span");
    var txt = document.createTextNode("X");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    closeOnClick();
    var listItems = document.querySelectorAll('li');
    listItems.forEach(function (item) {
        item.addEventListener('click', function () {
            item.classList.add('checkOffAnim');
            setTimeout(function () {
                item.remove();
            }, 300);
        });
    });
    li.setAttribute('locatedIn', localStorageVal);
    // Adding to local storage
    var storedData = localStorage.getItem(localStorageVal);
    var itemsArray = storedData ? JSON.parse(storedData) : [];
    itemsArray.push(inputValue.value);
    localStorage.setItem(localStorageVal, JSON.stringify(itemsArray));
    //
    inputValue.value = "";
}
// Click on a close button to hide the current list item
function closeOnClick() {
    var closeElements = Array.from(document.getElementsByClassName("close"));
    var _loop_1 = function (element) {
        element.onclick = function () {
            var _a;
            if (element.parentElement) {
                var locatedIn = element.parentElement.getAttribute('locatedIn');
                if (locatedIn) {
                    var storedData = localStorage.getItem(locatedIn);
                    var itemsArray = storedData ? JSON.parse(storedData) : [];
                    //implement deleting of the element from the array
                    var value = (_a = element.parentElement.firstChild) === null || _a === void 0 ? void 0 : _a.nodeValue;
                    var index = itemsArray.indexOf(value);
                    itemsArray.splice(index, 1);
                    localStorage.setItem(locatedIn, JSON.stringify(itemsArray));
                }
                element.parentElement.remove();
            }
        };
        var currentBorderColor;
        var closeColor = getComputedStyle(document.body).getPropertyValue('--closeHover');
        element.addEventListener('mouseover', function () {
            if (element.parentElement) {
                currentBorderColor = element.parentElement.style.borderColor;
                element.parentElement.style.borderColor = closeColor;
            }
        });
        element.addEventListener('mouseout', function () {
            if (element.parentElement) {
                element.parentElement.style.borderColor = currentBorderColor;
            }
        });
    };
    for (var _i = 0, closeElements_1 = closeElements; _i < closeElements_1.length; _i++) {
        var element = closeElements_1[_i];
        _loop_1(element);
    }
}
function addTask(text, ulToPaste, localStorageVal) {
    var _a;
    var li = document.createElement('li');
    var t = document.createTextNode(text);
    li.appendChild(t);
    li.className = "liColumns";
    li.setAttribute('locatedIn', localStorageVal);
    (_a = document.getElementById(ulToPaste)) === null || _a === void 0 ? void 0 : _a.appendChild(li);
}
var dailiElement = localStorage.getItem('dailiList');
var itemsArrayDaili = dailiElement ? JSON.parse(dailiElement) : [];
for (var _i = 0, itemsArrayDaili_1 = itemsArrayDaili; _i < itemsArrayDaili_1.length; _i++) {
    var dailies = itemsArrayDaili_1[_i];
    addTask(dailies, "dailiUL", 'dailiList');
}
var todosElement = localStorage.getItem('sprintList');
var itemsArrayTodos = todosElement ? JSON.parse(todosElement) : [];
for (var _c = 0, itemsArrayTodos_1 = itemsArrayTodos; _c < itemsArrayTodos_1.length; _c++) {
    var todo = itemsArrayTodos_1[_c];
    addTask(todo, "sprintUL", 'sprintList');
}
var myNodelist = Array.from(document.getElementsByClassName("liColumns"));
for (var _d = 0, myNodelist_1 = myNodelist; _d < myNodelist_1.length; _d++) {
    var nodes = myNodelist_1[_d];
    var span = document.createElement("span");
    var txt = document.createTextNode("X");
    span.className = "close";
    span.appendChild(txt);
    nodes.appendChild(span);
}
var listItems = Array.from(document.getElementsByClassName("liColumns"));
listItems.forEach(function (item) {
    item.addEventListener('click', function () {
        item.classList.add('checkOffAnim');
        setTimeout(function () {
            item.remove();
        }, 300);
    });
});
closeOnClick();
(_a = document.getElementById("input-daili")) === null || _a === void 0 ? void 0 : _a.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        newElement("input-daili", "dailiUL", "dailiList");
    }
});
(_b = document.getElementById("input-todos")) === null || _b === void 0 ? void 0 : _b.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        newElement("input-todos", "sprintUL", "sprintList");
    }
});
