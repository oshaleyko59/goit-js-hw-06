/* Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і
зменшувати його значення на одиницю.
Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника
та ініціалізуй її значенням 0.
Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй лічильник.
Оновлюй інтерфейс новим значенням змінної counterValue. */

const value = document.getElementById("value");
const btnUp = document.querySelector('button[data-action="increment"]');
const btnDown = document.querySelector('button[data-action="decrement"]');

let counterValue = 0;
function onDownClick() {
    counterValue--;
    value.innerText = counterValue;
}
function onUpClick() {
    counterValue++;
    value.innerText = counterValue;
}
btnDown.addEventListener("click", onDownClick);
btnUp.addEventListener("click", onUpClick);

