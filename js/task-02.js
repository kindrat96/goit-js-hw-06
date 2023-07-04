const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elementList = document.querySelector('#ingredients');

const markup = ingredients.map(ingredient => {
  const newElementLi = document.createElement('li');
  newElementLi.classList.add('item');
  newElementLi.textContent = ingredient;
  return newElementLi;
});

elementList.append(...markup);
