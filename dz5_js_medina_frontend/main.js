const input = document.getElementById("input");
const createButton = document.getElementById("create_button");
const todolist = document.getElementById("todo_list");

function createTodoFromInput()  {
    if (!input.value.trim()) return alert("напиши что нибудь");



    const div = document.createElement("div");
    const text = document.createElement("h3");
    const btnDivs = document.createElement('div');
    const deleteButton = document.createElement("button")
    const editButton = document.createElement("button")

    div.setAttribute("class", "block_text");
    deleteButton.setAttribute('class', 'delete_button')
    editButton.setAttribute('class', 'edit_button')
    btnDivs.setAttribute("class", "buttons_div");


    text.innerHTML = input.value;
    deleteButton.innerHTML = "delete";
    editButton.innerHTML = "edit";


    btnDivs.append(editButton,deleteButton)
    div.append(text,btnDivs);
    todolist.append(div);

    deleteButton.onclick = () => div.remove();


    editButton.onclick = () => {
        const str = prompt('Edit this ${text.innerText}');
        text.innerHTML = str;
    };


    input.value = "";
}

createButton.onclick = () => createTodoFromInput();
input.addEventListener('keydown', (e) => {
    if (e.key === "Enter") createTodoFromInput();
});

function addButtonsToTodo(todoElement) {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'delete';
    deleteButton.addEventListener('click', () => {
        todoElement.remove();
    });

    const editButton = document.createElement('button');
    editButton.textContent = 'edit';
    editButton.addEventListener('click', () => {
        const todoTextElement = todoElement.querySelector('h3');
        const newText = prompt('Введите новый текст для задачи:', todoTextElement.textContent);
        if (newText !== null) {
            todoTextElement.textContent = newText;
        }
    });

    todoElement.appendChild(deleteButton);
    todoElement.appendChild(editButton);
}

function createTodo(text) {
    const todoItem = document.createElement('div');
    todoItem.className = 'todo-item';

    const todoText = document.createElement('h3');
    todoText.textContent = text;

    todoItem.appendChild(todoText);
    addButtonsToTodo(todoItem);
    todolist.appendChild(todoItem);
}

createTodo('Первая задача');
createTodo('Вторая задача');
