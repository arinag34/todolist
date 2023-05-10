// Создайте кнопку "Закрыть" и добавьте ее к каждому элементу списка
let myNodelist = document.getElementsByTagName("LI");
let i;
for (i = 0; i < myNodelist.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);

    myNodelist[i].appendChild(span);

}

// Нажмите на кнопку "Закрыть", чтобы скрыть текущий элемент списка
let close = document.getElementsByClassName("close");
i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

// Добавить "checked" символ при нажатии на элемент списка
let list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// Создайте новый элемент списка при нажатии на кнопку "Добавить"
function newElement() {
    let li = document.createElement("li");

    /*EDIT*/
    let inputValue = document.createTextNode(document.getElementById("new_todo").value);
    let t = document.createElement("p");
    t.appendChild(inputValue);
    t.contentEditable = "true";
    li.appendChild(t);
    /*END EDIT*/
    if (inputValue === '') {
        alert("Ви маєте щось написати!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("new_todo").value = "";

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    addToLocalStorage(span);
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}



