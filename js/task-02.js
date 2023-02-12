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

document.getElementById("ingredients")
    .append(...ingredients
        .map(ingredient => {
            const li = document.createElement("li");
            li.textContent = ingredient;
            li.classList.add("item");
            return li;
            })
    );
