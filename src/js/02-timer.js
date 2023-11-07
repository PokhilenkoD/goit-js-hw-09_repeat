import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

refs = {
  input: document.querySelector('.js-datetime_picker'),
  btnStart: document.querySelector('.js-button_start'),
};

refs_TIMER_ELEMENTS = {
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};
// Прослушиватель для кнопки Start
refs.btnStart.addEventListener('click', onClick);

// Начальная установка опции disabled для кнопки start
refs.btnStart.disabled = true;

// Переменная для инициализации выбранной даты в секундах UTC
let selectedDate = 0;
let intervalID = 0;

// Опции для инициализации flatpickr
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    if (Date.parse(selectedDates[0]) < Date.now()) {
      Notify.failure('Please choose a date in the future');
      return;
    }
    refs.btnStart.disabled = false;
    selectedDate = Date.parse(selectedDates[0]);
  },
};

flatpickr(refs.input, options);

// Колбэк прослушивателя
function onClick() {
  intervalID = setInterval(timer, 1000);
}

// Функция для подсчета значений таймера
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// Функция работы таймера
function timer() {
  const timeCounterValue = selectedDate - Date.now();

  if (timeCounterValue > 0) {
    const timeObj = convertMs(timeCounterValue);

    drawingTimer(refs_TIMER_ELEMENTS, timeObj);
    return;
  }
  Notify.success('Timer is out!');
  clearInterval(intervalID);
}

// Функция отрисовки таймера
function drawingTimer(objEl, objTime) {
  const arrEl = Object.values(objEl);
  const arrTime = Object.values(objTime);

  for (let i = 0; i < arrEl.length; i += 1) {
    arrEl[i].textContent = arrTime[i].toString().padStart(2, 0);
  }
}
