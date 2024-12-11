// Функция для нахождения минимального числа

function findMin(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        console.error('Оба параметра должны быть числами.');
        return;
    }
    console.log(Math.min(num1, num2));
}
findMin(10, 5);





// Функция для получения длины строки из prompt

function getStringLength(input) {
    if (typeof input !== 'string') {
        console.error('Параметр должен быть строкой.');
        return;
    }
    console.log(input.length);
}
getStringLength();




//калькулятор
function calculator(num1, num2, operator) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        console.error('Оба параметра должны быть числами.');
        return;
    }

    switch (operator) {
        case '+':
            console.log(num1 + num2);
            break;
        case '-':
            console.log(num1 - num2);
            break;
        case '*':
            console.log(num1 * num2);
            break;
        case '/':
            if (num2 === 0) {
                console.error('Делить на ноль нельзя.');
            } else {
                console.log(num1 / num2);
            }
            break;
        default:
            console.error('Некорректный оператор. Используйте "+", "-", "*" или "/".');
    }
}
calculator(10, 2, '+');
calculator(10, 0, '/');
