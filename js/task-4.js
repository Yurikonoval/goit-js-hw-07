const refs = {
  decrementBtn: document.querySelector(`[data-action="decrement"]`),
  incrementBtn: document.querySelector(`[data-action="increment"]`),
  value: document.querySelector(`#value`),
};

// console.log(valueRef);

let counterValue = 0;

refs.decrementBtn.addEventListener(`click`, onDecrement);

function onDecrement() {
  counterValue -= 1;
  //   console.log(counterValue);
  refs.value.textContent = counterValue;
}

refs.incrementBtn.addEventListener(`click`, onIncrement);

function onIncrement() {
  counterValue += 1;
  //   console.log(counterValue);
  refs.value.textContent = counterValue;
}
