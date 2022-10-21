import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const formRefs = document.querySelector('.feedback-form');

formRefs.addEventListener('input', throttle(setCurrentData, 500));
formRefs.addEventListener('submit', onFormSubmit);

if (Object.values(localStorage.getItem(STORAGE_KEY)).length) {
  const localData = getDataFromLocal();
  for (const [name, value] of Object.entries(localData)) {
    if (value) {
      formRefs.elements[name].value = value;
    }
  }
}

function setCurrentData(event) {
  const localData = getDataFromLocal();
  localData[event.target.name] = event.target.value.trim();

  localStorage.setItem(STORAGE_KEY, JSON.stringify(localData));
}

function getDataFromLocal() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
}
function onFormSubmit(event) {
  event.preventDefault();
  const localData = getDataFromLocal();

  for (const elem of event.currentTarget.elements) {
    if (elem.name && !elem.value)
      return alert('Заповніть, будь ласка, всі поля форми!');
  }

  console.table(localData);
  localStorage.removeItem(STORAGE_KEY);
  formRefs.reset();
}
