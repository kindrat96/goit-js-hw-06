const refs = {
  input: document.querySelector('#name-input'),
  span: document.querySelector('#name-output'),
};

const { input, span } = refs;

input.addEventListener('input', event =>
  !event.currentTarget.value
    ? (span.textContent = 'Anonymous')
    : (span.textContent = event.currentTarget.value)
);
