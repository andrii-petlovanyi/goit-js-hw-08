import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const formRefs = document.querySelector('.feedback-form');

formRefs.addEventListener('input', throttle(setCurrentData, 500));
formRefs.addEventListener('submit', onFormSubmit);

const localData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
if (Object.values(localData).length) {
  for (const [name, value] of Object.entries(localData)) {
    if (value) {
      formRefs.elements[name].value = value;
    }
  }
}

function setCurrentData(event) {
  localData[event.target.name] = event.target.value.trim();

  localStorage.setItem(STORAGE_KEY, JSON.stringify(localData));
}

function onFormSubmit(event) {
  event.preventDefault();

  for (const elem of event.currentTarget.elements) {
    if (elem.name && !elem.value)
      return alert('Заповніть, будь ласка, всі поля форми!');
  }

  console.table(localData);
  localStorage.removeItem(STORAGE_KEY);
  formRefs.reset();
}
