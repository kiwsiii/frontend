let count = 0;
const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
incrementButton.addEventListener('click', () => {
    count++;
    counterElement.textContent = count;
    counterElement.style.color = 'green';
});
decrementButton.addEventListener('click', () => {
    if (count > 0) {
        count--;
        counterElement.textContent = count;
        counterElement.style.color = 'red';
    }
});



const trackerElement = document.getElementById('tracker');
trackerElement.addEventListener('mousemove', (event) => {
    const x = event.offsetX;
    const y = event.offsetY;
    console.log(`Координаты: X=${x}, Y=${y}`);
});


const trafficLight = {
    red: document.getElementById('red'),
    yellow: document.getElementById('yellow'),
    green: document.getElementById('green')
};

function activateLight(color) {
    Object.keys(trafficLight).forEach(key => {
        trafficLight[key].classList.remove('active');
    });
    if (trafficLight[color]) {
        trafficLight[color].classList.add('active');
    }
}

const userColor = prompt('Введите цвет (Красный, Желтый, Зеленый):');
if (userColor.toLowerCase() === 'красный') {
    activateLight('red');
    console.log('STOP');
} else if (userColor.toLowerCase() === 'зеленый') {
    activateLight('green');
    console.log('GO');
} else {
    console.log('Некорректный цвет');
}


