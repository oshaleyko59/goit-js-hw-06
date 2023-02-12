function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
/* Напиши скрипт, який змінює кольори фону елемента <body>
через інлайн-стиль по кліку на button.change-color і виводить
значення кольору в span.color.
Для генерування випадкового кольору використовуй getRandomHexColor.
  */
const refs = {
    widget: document.querySelector('.widget'),
    span: document.querySelector('.color')
}

const handleClick = event => {
    refs.widget.style.backgroundColor = getRandomHexColor();
    refs.span.textContent = refs.widget.style.backgroundColor;
}

document.querySelector('.change-color')
    .addEventListener("click", handleClick);
