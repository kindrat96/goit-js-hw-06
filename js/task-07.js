const refs = {
  input: document.querySelector('#font-size-control'),
  span: document.querySelector('#text'),
};

const { input, span } = refs;
span.style.fontSize = '56px';

input.addEventListener('input', () => {
  span.style.fontSize = `${input.value}px`;
});
