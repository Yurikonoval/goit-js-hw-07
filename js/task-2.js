const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsItems = ingredients.map(ingredient => {
  const itemEl = document.createElement(`li`);
  itemEl.textContent = ingredient;
  return itemEl;
});
console.log(ingredientsItems);

const ingredientsEl = document.querySelector(`ul#ingredients`);

ingredientsEl.append(...ingredientsItems);
