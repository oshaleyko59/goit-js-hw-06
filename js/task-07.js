/* Напиши скрипт, який реагує на зміну(подія input)
 input#font-size-control  і змінює інлайн-стиль span#text,
 оновлюючи font-size. В результаті, перетягуючи повзунок,
  буде змінюватися розмір тексту.

<input id="font-size-control"
type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span> */

const spanEl = document.getElementById('text');
const handleChange = event => {
    spanEl.style.fontSize = `${event.currentTarget.value}px`;
}
document
  .getElementById("font-size-control")
  .addEventListener("input", handleChange);
