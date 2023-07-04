const input = document.querySelector('#validation-input');

input.addEventListener('blur', event => {
  input.textContent = event.currentTarget.value;
  if (input.textContent.length === Number(input.getAttribute('data-length'))) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
});
