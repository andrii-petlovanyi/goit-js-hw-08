import throttle from 'lodash.throttle';
// ===
const STORAGE_KEY = 'feedback-form-state';
const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form textarea'),
};
const dataForm = {
  email: '',
  message: '',
};

refs.form.addEventListener('input', throttle(getCurrentData, 500));
refs.form.addEventListener('submit', onFormSubmit);

const localData = JSON.parse(localStorage.getItem(STORAGE_KEY));
if (localData) {
  refs.email.value = localData.email;
  refs.message.value = localData.message;
}

function getCurrentData(event) {
  if (event.target === refs.email) {
    dataForm.email = event.target.value;
  }

  if (event.target === refs.message) {
    dataForm.message = event.target.value;
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
}

function onFormSubmit(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const message = event.currentTarget.elements.message.value;

  if (email.length && message.length) {
    console.table(localData);
    // console.log(localData);
    localStorage.removeItem(STORAGE_KEY);
    refs.form.reset();
  } else {
    alert('Заповніть, будь ласка, всі поля форми!');
  }
}
