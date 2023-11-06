const btnStart = document.querySelector('.js-button_start');
const btnStop = document.querySelector('.js-button_stop');
const body = document.querySelector('body');

btnStart.addEventListener('click', onClick);
btnStop.addEventListener('click', onClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnStop.disabled = true;

function onClick(e) {
  if (e.target.className === 'js-button_start') {
    btnStart.disabled = true;
    btnStop.disabled = false;

    timerId = setInterval(
      () => (body.style.backgroundColor = getRandomHexColor()),
      1000
    );
    return;
  } else if (e.target.className === 'js-button_stop') {
    btnStart.disabled = false;
    btnStop.disabled = true;

    clearInterval(timerId);
  }
}
