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

function rgbToHex(rgbstr) {
    const [r, g, b] = rgbstr.substring(4)       //get rid of 'rgb('
        .split(',')                             //get array of number-strings
        .map(str => parseInt(str, 10));         //map array to numbers
    
 //for test   console.log(`#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`);
    return `#${(r*256*256 + g*256 + b).toString(16).padStart(6, "0")}`;
}

const handleClick = event => {
    refs.widget.style.backgroundColor = getRandomHexColor();
    refs.span.textContent = rgbToHex(refs.widget.style.backgroundColor);
}

document.querySelector('.change-color')
    .addEventListener("click", handleClick);
