/* Напиши скрипт, який:

Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль
текст заголовку елемента (тегу <h2>) і кількість елементів в категорії
(усіх <li>, вкладених в нього).
В результаті, в консолі будуть виведені наступні повідомлення.

Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5 */
const liElems = document.querySelectorAll('#categories > li');
console.log(`Number of categories: ${liElems.length}`);
console.log('');
liElems.forEach((liEl) => {
    console.log(`Category: ${liEl.firstElementChild.textContent}`);
    console.log(
    `Elements: ${liEl.children[1].children.length}`
    );
    console.log("");
});
