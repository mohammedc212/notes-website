let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputFeild = document.getElementById('inputFeild');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputFeild.value;
    toDoContainer.appendChild(paragraph);
    inputFeild.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
})

// Save note to localStorage
function saveNote() {
    const note = document.getElementById('note').value;
    localStorage.setItem('userNote', note);
}

// Retrieve note from localStorage
function loadNote() {
    const savedNote = localStorage.getItem('userNote');
    if (savedNote) {
        document.getElementById('note').value = savedNote;
    }
}

// Call loadNote when the page loads
window.onload = loadNote;
