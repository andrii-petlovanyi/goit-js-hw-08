import throttle from 'lodash.throttle';
// ===
const STORAGE_KEY = 'feedback-form-state';
const formRefs = document.querySelector('.feedback-form');

formRefs.addEventListener('input', throttle(setCurrentData, 500));
formRefs.addEventListener('submit', onFormSubmit);

const localData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
if (Object.keys(localData).length) {
  for (const el of formRefs.elements) {
    el.value = localData[el.name];
  }
}

function setCurrentData(event) {
  for (const elem of formRefs.elements) {
    if (event.target === elem && event.target.value.length) {
      localData[elem.name] = event.target.value;
    }
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(localData));
}

function onFormSubmit(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const message = event.currentTarget.elements.message.value;

  if (email.length && message.length) {
    console.table(localData);
    localStorage.removeItem(STORAGE_KEY);
    formRefs.reset();
  } else {
    alert('Заповніть, будь ласка, всі поля форми!');
  }
}
