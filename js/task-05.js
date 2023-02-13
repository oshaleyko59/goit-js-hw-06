/* Напиши скрипт, який під час набору тексту в інпуті
input#name-input (подія input),
підставляє його поточне значення в span#name-output.
 Якщо інпут порожній, у спані повинен відображатися
 рядок "Anonymous". */
const spanEl = document.getElementById("name-output");
const keyEvtHandler = event => {
    spanEl.textContent = event.currentTarget.value;
    if (spanEl.textContent === "") spanEl.textContent = "Anonymous";
}

document.getElementById("name-input")
        .addEventListener("input", keyEvtHandler);
