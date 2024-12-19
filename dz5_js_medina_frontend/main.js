

// Создаём функцию для добавления кнопок
function addButtonsToTodo(todoElement) {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'delete';
    deleteButton.addEventListener('click', () => {
        todoElement.remove();
    });
    const editButton = document.createElement('button');
    editButton.textContent = 'edit';
    editButton.addEventListener('click', () => {
        const newText = prompt('Введите новый текст для задачи:', todoElement.textContent);
        if (newText !== null) {
            todoElement.querySelector('span').textContent = newText;
        }
    });

        // Добавляем кнопки в элемент задачи

    todoElement.appendChild(deleteButton);
    todoElement.appendChild(editButton);
}
function createTodo(text) {
    const todoList = document.getElementById('todo-list');

    const todoItem = document.createElement('div');
    todoItem.className = 'todo-item';

    const todoText = document.createElement('span');
    todoText.textContent = text;

    todoItem.appendChild(todoText);
    addButtonsToTodo(todoItem);
    todoList.appendChild(todoItem);
}

// Пример использования функции для создания задач

createTodo('Первая задача');
createTodo('Вторая задача');

