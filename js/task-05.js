/* Напиши скрипт, який під час набору тексту в інпуті
input#name-input (подія input),
підставляє його поточне значення в span#name-output.
 Якщо інпут порожній, у спані повинен відображатися
 рядок "Anonymous". */
const span = document.getElementById("name-output");
const keyEvtHandler = event => {
    span.textContent = event.currentTarget.value;
    if (span.textContent === "")
        span.textContent = "Anonymous";
}

document.getElementById("name-input")
        .addEventListener("input", keyEvtHandler);
