const numbers = [10, 20, 30, 50, 235, 3000];
const filteredNumbers = numbers.filter(num => {
    const firstDigit = String(num)[0];
    return ['1', '2', '5'].includes(firstDigit);
});
console.log('Числа, которые начинаются с 1, 2 или 5:', filteredNumbers);

for (let i = 20; i >= 0; i--) {
    console.log(i);
}

const color = prompt("Введите цвет светофора (красный, жёлтый, зелёный):").toLowerCase();

if (color === 'красный') {
    alert('Стоп!');
} else if (color === 'жёлтый') {
    alert('Ждите!');
} else if (color === 'зелёный') {
    alert('Идите!');
} else {
    alert('Ошибка: Введите один из цветов светофора (красный, жёлтый, зелёный).');
}







