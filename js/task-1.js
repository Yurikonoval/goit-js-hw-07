const refs = {
  categories: document.querySelector(`ul#categories`),
  items: document.querySelectorAll(`.item`),
};

console.log(`Количество категорий:`, refs.categories.children.length);

refs.items.forEach(element => {
  console.log('Категория:', element.children[0].textContent);
  console.log(`Количество элементов:`, element.children[1].children.length);
});
