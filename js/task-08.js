const refs = {
  form: document.querySelector('.login-form'),
  inputEmail: document.querySelector('input[type="email"]'),
  inputPassword: document.querySelector('input[type="password"]'),
};

const { form, inputEmail, inputPassword } = refs;

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  if (!inputEmail.value) return alert('Empty field Login. Please enter login.');
  if (!inputPassword.value)
    return alert('Empty password field. Please enter a password.');
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;
  const formData = {
    email,
    password,
  };
  console.log(formData);
  event.currentTarget.reset();
}
