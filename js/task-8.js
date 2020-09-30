const inputEl = document.querySelector(`input`);
const boxesEl = document.querySelector(`#boxes`);
const renderEl = document.querySelector(`[data-action="render"]`);
const destroyEl = document.querySelector(`[data-action="destroy"]`);

let boxNumber = 0;
let elements = [];

inputEl.addEventListener(`input`, userChangeNumber);
renderEl.addEventListener(`click`, render);
destroyEl.addEventListener(`click`, destroyBoxes);

function createBox(size) {
  const box = document.createElement(`div`);
  box.style.width = `${size}px`;
  box.style.height = `${size}px`;
  box.style.backgroundColor = randomColor();
  return box;
}

function randomColor() {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  console.log(`rgb(${r}, ${g}, ${b})`);
  return `rgb(${r}, ${g}, ${b})`;
}

function userChangeNumber(event) {
  return (boxNumber = event.currentTarget.value);
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const size = 30 + i * 10;
    const div = createBox(size);
    elements.push(div);
  }
  boxesEl.append(...elements);
  elements = [];
  return boxesEl;
}
function destroyBoxes() {
  return (boxesEl.innerHTML = ``);
}
function render() {
  createBoxes(boxNumber);
}
