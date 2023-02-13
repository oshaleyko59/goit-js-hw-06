const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
/* Напиши скрипт, який для кожного елемента масиву ingredients:
- Створить окремий елемент <li> - використовуй метод document.createElement().
- Додасть назву інгредієнта як його текстовий вміст.
- Додасть елементу клас item.
- Після чого, вставить усі <li> за одну операцію у список ul#ingredients. */

/* my 1st variant
document.getElementById("ingredients")
    .append(...ingredients     //розпилюється результат map-інгу вихідного масиву - на масів лішек
        .map(ingredient => {
            const li = document.createElement("li");
            li.textContent = ingredient;
            li.classList.add("item");
            return li;
            })
    ); */

//my second variant:
//це те саме, що і в першому варіанті, тільки я винесла масив в проміжну змінну
const liElems = ingredients.map((ingredient) => {
        const li = document.createElement("li");
        li.textContent = ingredient;
        li.classList.add("item");
        return li;
});
//це виконується за один раз, бо append викликається один раз - і в першому варіанті теж один раз
document.getElementById("ingredients").append(...liElems);


