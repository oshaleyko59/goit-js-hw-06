/*
Напиши скрипт управління формою логіна.
Обробка відправлення form.login-form повинна відбуватися відповідно
до події submit.
Під час відправлення форми сторінка не повинна перезавантажуватися.
Якщо у формі є незаповнені поля, виводь alert з попередженням про те,
що всі поля повинні бути заповнені.
Якщо користувач заповнив усі поля і відправив форму, збери значення
полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля
- значенням властивості. Для доступу до елементів форми використовуй
властивість elements.
Виведи об'єкт із введеними даними в консоль і очисти поля форми
методом reset.
 */

const onLoginFormSubmit = event => {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;
    if (email.value === "" || password.value === "") {
        return alert("Please fill in all the fields!");
    }

    console.log({ email: email.value, password: password.value });
    /* const formData = new FormData(event.currentTarget);
    formData.forEach((value, name) => console.log(`${name}: "${value}"`));
     */
    event.currentTarget.reset();
}
document.querySelector(".login-form")
    .addEventListener("submit", onLoginFormSubmit);
