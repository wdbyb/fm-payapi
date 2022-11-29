const btn = document.querySelector('.menu-toggler');
const scheduleForm = document.querySelector('#schedule-form');
const requestForm = document.querySelector('#request-form');

if (btn) {
  btn.addEventListener('click', (e) => {
    btn.classList.toggle('active');
  });
}

if (scheduleForm) {
  scheduleForm.addEventListener('submit', (e) => {
    e.preventDefault();
  });
}

if (requestForm) {
  const name = document.querySelector('#request-name');
  const email = document.querySelector('#request-email');
  const message = document.querySelector('#request-message');

  const showHideError = (input, message = '', showError = false) => {
    const formField = input.parentElement;
    const error = formField.querySelector('.form-request__error');

    if (showError) {
      formField.classList.add('error');

      error.textContent = message;
    } else {
      formField.classList.remove('error');

      error.textContent = message;
    }
  };

  const isEmailValid = (email) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const checkEmpty = (el) => {
    const textValue = el.value.trim();

    if (!textValue.length) {
      showHideError(el, 'This field can’t be empty.', true);
    } else {
      showHideError(el);
    }
  };

  const checkEmail = (el) => {
    const emailValue = el.value.trim();

    if (!emailValue.length) {
      showHideError(el, "This field can't be empty.", true);
    } else if (!isEmailValid(emailValue)) {
      showHideError(el, 'Please use a valid email address.', true);
    } else {
      showHideError(el);
    }
  };

  requestForm.addEventListener('submit', (e) => {
    e.preventDefault();

    checkEmpty(name);
    checkEmpty(message);
    checkEmail(email);
  });
}
