const pencil = document.querySelector('#pencil');
const items = document.querySelector('.items');
const userInput = document.getElementById('userInput');
const todo = document.getElementById('todo');
const error = document.querySelector('.error');


userInput.addEventListener('keydown', function (e) {
    if (e.key == 'Enter') {
        add();
    }
});
            
function add() {
    const inputValue = userInput.value.trim(); // Use trim() to remove whitespace
    if (!inputValue) { // Check if the input is empty or only whitespace
        error.style.display = "block";
        error.innerHTML = "Please write a todo.";
        return; // Exit the function early if there's an error
    } else{
        error.style.display = 'none';
        // error.remove();
        const newTodo = document.createElement('h2');
        const span = document.createElement('span');
        newTodo.innerHTML = '- ' + userInput.value;
        items.appendChild(newTodo);
        span.innerHTML = '\u00d7';
        newTodo.appendChild(span);
        newTodo.addEventListener("click", function () {
            newTodo.classList.toggle('checked');
        });
        span.addEventListener("click", function () {
            newTodo.innerHTML = '';
            newTodo.remove();
        });

    }
    userInput.value = '';
    // saveData();
}


/* function saveData(){
    localStorage.setItem("data", items.innerHTML);
}
function showTask(){
    items.innerHTML = localStorage.getItem("data");
}
showTask(); */