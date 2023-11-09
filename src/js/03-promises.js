import { Notify } from 'notiflix/build/notiflix-notify-aio';

function createPromise(pos, time) {
  return new Promise((resolve, reject) => {
    setintervalId = setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ pos, time });
      } else {
        reject({ pos, time });
      }
    }, time);
  });
}

const form = document.querySelector('.js-form');
form.addEventListener('submit', onSubmit);
let setintervalId = 0;

function onSubmit(e) {
  e.preventDefault();
  const { amount, delay, step } = formValueObject(e);
  for (let i = 1, j = 0; i <= amount; i += 1, j += step) {
    createPromise(i, delay + j)
      .then(({ pos, time }) => {
        Notify.success(`✅ Fulfilled promise ${pos} in ${time}ms`);
      })
      .catch(({ pos, time }) => {
        Notify.failure(`❌ Rejected promise ${pos} in ${time}ms`);
      });
  }

  form.reset();
}

// Обрабатывает форму и возвращает объект значений формы
function formValueObject(e) {
  const obj = {};
  const objectValues = e.target.elements;

  for (const key in objectValues) {
    if (objectValues.hasOwnProperty(key)) {
      if (key.length > 1) {
        const name = objectValues[key].name;
        const elementValue = Number(objectValues[key].value);
        obj[name] = elementValue;
      }
    }
  }
  return obj;
}
