const stringsArray = [];


const inputText = document.getElementById('inputText');
const addButton = document.getElementById('addButton');
const list = document.getElementById('list');
function reverseString(str) {
            return str.split('').reverse().join('');
        }
        function renderList() {
            list.innerHTML = '';
            stringsArray.forEach((string, index) => {
                const li = document.createElement('li');
                li.textContent = `${index + 1}. ${reverseString(string)}`;
                list.appendChild(li);
            });
        }
        addButton.addEventListener('click', () => {
            const inputValue = inputText.value.trim();
            if (inputValue) {
                stringsArray.push(inputValue);
                inputText.value = '';
                renderList();
            } else {
                alert('Please enter a valid string!');
            }
        });

