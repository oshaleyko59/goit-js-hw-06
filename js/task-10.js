function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
/* Напиши скрипт створення і очищення колекції елементів.
Користувач вводить кількість елементів в input і натискає кнопку Створити,
після чого рендериться колекція. Натисненням на кнопку Очистити,
колекція елементів очищається.
Створи функцію createBoxes(amount), яка приймає один параметр - число.
Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.
Розміри найпершого <div> - 30px на 30px.
Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
Всі елементи повинні мати випадковий колір фону у форматі HEX.
Використовуй готову функцію getRandomHexColor для отримання кольору.
Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб
видаляючи всі створені елементи. */

const number = document.querySelector("#controls > input");
const boxesEl = document.getElementById('boxes');

function createBox(ind) {
    const div = document.createElement('div');
    div.style.height = `${30 + ind * 10}px`;
    div.style.width = div.style.height;
    div.style.backgroundColor = getRandomHexColor();
    boxesEl.append(div);
}

function createBoxes(amount) {
    const startInd = boxesEl.childElementCount;
    for (let i = startInd; i < startInd + Number(amount); i++) {
        createBox(i);
    }
}

function destroyBoxes() {
    number.value = '';
    boxesEl.innerHTML ='';
}

document.querySelector('button[data-create]')
    .addEventListener('click', event => {
    createBoxes(number.value);
});

document
    .querySelector("button[data-destroy]")
    .addEventListener("click", (event) => {
        destroyBoxes();
    });
