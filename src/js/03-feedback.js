import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const formRefs = document.querySelector('.feedback-form');

formRefs.addEventListener('input', throttle(setCurrentData, 500));
formRefs.addEventListener('submit', onFormSubmit);

let formInputsRef = [];
for (const el of formRefs.elements) {
  if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA')
    formInputsRef.push(el);
}

const localData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
if (Object.values(localData).length) {
  for (const el of formInputsRef) {
    if (localData[el.name]) el.value = localData[el.name];
  }
}

function setCurrentData(event) {
  for (const elem of formInputsRef) {
    if (event.target === elem) localData[elem.name] = event.target.value.trim();
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(localData));
}

function onFormSubmit(event) {
  event.preventDefault();

  for (const elem of formInputsRef) {
    if (!elem.value) return alert('Заповніть, будь ласка, всі поля форми!');
  }

  console.table(localData);
  localStorage.removeItem(STORAGE_KEY);
  formRefs.reset();
}
