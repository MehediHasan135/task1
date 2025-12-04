
const btn = document.getElementById('btnChangeBg');
let p = 0;
btn.addEventListener("click", () => {
    if (p % 2 == 0) {
        document.body.style.backgroundColor = "#CCCCFF";
    } else {
        document.body.style.backgroundColor = "#FFFFFF";
    }
    p++;
});

const addBtn = document.getElementById('addItem');
const list = document.getElementById('itemList');
addBtn.addEventListener('click', () => {
    let N = document.getElementsByTagName('li').length;
    let n = N + 1;
    const newItem = document.createElement('li');
    newItem.innerText = `Item ${n}`;
    list.append(newItem);
});

const removeBtn = document.getElementById('removeItem');
removeBtn.addEventListener('click', () => {
    if (list.lastChild) {
        list.removeChild(list.lastChild);
    }
});

const inputField = document.getElementById('textInput');
const outputDiv = document.getElementById('output');

inputField.addEventListener('keyup',() =>{
    outputDiv.innerText = inputField.value;
});

