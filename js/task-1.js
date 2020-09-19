const categories = document.querySelector(`ul#categories`).children;

console.log(`Количество категорий:`, categories.length);

const itemEl = document.querySelectorAll(`ul#categories .item`);

// console.log(titleTextEl[0].textContent);

itemEl.forEach(
  element => (
    console.log('Категория:', element.querySelector(`h2`).textContent),
    console.log(`Количество элементов:`, element.querySelectorAll(`li`).length)
  ),
);
