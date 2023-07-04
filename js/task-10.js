function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector('input[type="number'),
  create: document.querySelector('button[data-create]'),
  destroy: document.querySelector('button[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

const { input, create, destroy, boxes } = refs;

create.addEventListener('click', onClickAction);
destroy.addEventListener('click', onClickDestroy);

function onClickAction() {
  boxes.innerHTML = '';
  const amount = input.value;
  createBoxes(amount);
}

function onClickDestroy() {
  boxes.innerHTML = '';
}

function createBoxes(amount) {
  const arrDiv = [];
  let divWidth = 30;
  let divHeight = 30;
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.width = `${divWidth}px`;
    div.style.height = `${divHeight}px`;
    div.style.backgroundColor = getRandomHexColor();
    divWidth += 10;
    divHeight += 10;
    arrDiv.push(div);
  }
  boxes.append(...arrDiv);
}
