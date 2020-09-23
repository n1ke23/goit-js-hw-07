let counterValue = 0;
const counterRef = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  counterSpan: document.querySelector('#value'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
};
console.log(counterRef);

counterRef.incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  counterRef.counterSpan.textContent = counterValue;
});
console.log(counterRef);
counterRef.decrementBtn.addEventListener('click', () => {
  if (counterValue > 0) {
    counterValue -= 1;
    counterRef.counterSpan.textContent = counterValue;
  }
});
// const increment = document.querySelector('[data-action="increment"]');
// increment.remuveEventListener('click', e => {
//   e.target.counterValue += 1;
// });
