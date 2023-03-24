const btnStartEl = document.querySelector('button[data-start]');
const btnStopEl = document.querySelector('button[data-stop]');

btnStartEl.addEventListener('click', onBtnStartClick);
btnStopEl.addEventListener('click', onBtnStopClick);

let intervalId = null;
btnStopEl.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function bcgColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function onBtnStartClick(e) {
  btnStartEl.disabled = true;
  btnStopEl.disabled = false;
  intervalId = setInterval(bcgColor, 1000);
}

function onBtnStopClick(e) {
  btnStartEl.disabled = false;
  btnStopEl.disabled = true;
  clearInterval(intervalId);
}
