const refs = { inputText: document.querySelector(`#validation-input`) };

refs.inputText.addEventListener(`blur`, outFocus);

function outFocus(event) {
  event.currentTarget.value.length === Number(refs.inputText.dataset.length)
    ? (refs.inputText.classList.add(`valid`),
      refs.inputText.classList.remove(`invalid`))
    : (refs.inputText.classList.add(`invalid`),
      refs.inputText.classList.remove(`valid`));
}
