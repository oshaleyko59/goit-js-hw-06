/* Напиши скрипт, який під час втрати фокусу на інпуті
 (подія blur),перевіряє його вміст щодо правильної
 кількості введених символів.

правильна кількість символів в атрибуті data-length.
Якщо правильна кількість символів, то border стає зеленим,
якщо неправильна - червоним.
Для додавання стилів використовуй CSS-класи valid і invalid,
 */
const inpEl = document.getElementById('validation-input');
const handleBlur = event => {
    if (event.currentTarget.value.length === Number(inpEl.dataset.length)) {
      if (inpEl.classList.contains("invalid"))
        inpEl.classList.replace("invalid", "valid");
      else inpEl.classList.add("valid");
    } else {
      if (inpEl.classList.contains("valid"))
        inpEl.classList.replace("valid", "invalid");
      else inpEl.classList.add("invalid");
    }
}
inpEl.addEventListener("blur", handleBlur);
