const refs = {
  slider: document.querySelector(`#font-size-control`),
  text: document.querySelector(`#text`),
};

refs.slider.addEventListener(`input`, changeFontSize);

function changeFontSize(event) {
  console.log(event.currentTarget.value + `px`);
  refs.text.style.fontSize = event.currentTarget.value + `px`;
}
