function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  body: document.querySelector('body'),
  span: document.querySelector('.color'),
  button: document.querySelector('.change-color'),
};
const { body, span, button } = refs;

button.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  span.textContent = randomColor;
  body.style.backgroundColor = randomColor;
});
