const refs = {
  slider: document.querySelector(`#font-size-control`),
  text: document.querySelector(`#text`),
};

refs.slider.addEventListener(`input`, changeFontSize);

function changeFontSize(event) {
  refs.text.style.fontSize = event.currentTarget.value + `px`;
}
