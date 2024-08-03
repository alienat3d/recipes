export const compoteCalcFunc = () => {
  const calcInput = document.querySelector('#gram-calc');
  const calcOutputs = document.querySelectorAll('.gram-calc-output');
  let sugar = calcOutputs[0];
  let fruits = calcOutputs[1];
  let water = calcOutputs[2];

  calcInput.addEventListener('input', () => {
    sugar.textContent = Math.trunc(+calcInput.value * 0.16);
    fruits.textContent = +calcInput.value;
    water.textContent = +calcInput.value * 4;
  })
}