const input = document.getElementById('validation-input');
let regulations = Number(input.dataset.length);
input.addEventListener('blur', () => {
  let textLength = input.value.length;
  if (textLength === regulations) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
});
