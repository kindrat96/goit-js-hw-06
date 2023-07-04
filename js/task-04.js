const refs = {
  buttonDecrement: document.querySelector('button[data-action= "decrement"]'),
  buttonIncrement: document.querySelector('button[data-action= "increment"]'),
  counter: document.querySelector('#value'),
};
let counterValue = 0;
const { buttonDecrement, buttonIncrement, counter } = refs;

buttonDecrement.addEventListener('click', onClick('decrement'));
buttonIncrement.addEventListener('click', onClick('increment'));

function onClick(direction) {
  return () => {
    if (direction === 'decrement')
      counter.textContent = `${(counterValue -= 1)}`;
    if (direction === 'increment')
      counter.textContent = `${(counterValue += 1)}`;
  };
}
