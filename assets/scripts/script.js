const form = document.querySelector('form');
const firstNameInputEl = document.getElementById('first-name');
const lastNameInputEl = document.getElementById('last-name');
const emailInputEl = document.getElementById('email');
const passEl = document.getElementById('pass');
const ageInputEl = document.getElementById('age');
const maleGenderEl = document.getElementById('male');
const femaleGenderEl = document.getElementById('female');
const vText = document.querySelectorAll('.v-text');
const vEmailText = document.querySelector('.v-email-text');
const vPassText = document.querySelector('.v-password-text');
const vRadioText = document.querySelector('.v-radio-text');
const alertBox = document.querySelector('.alert-box');

const alertHandler = () => {
  alertBox.classList.add('visible');

  setTimeout(() => {
    alertBox.classList.remove('visible');
  }, 2000);
};

// errors

const firstNameError = () => {
  if (firstNameInputEl.value.trim() === '') {
    vText[0].textContent = 'Please fill this field';
  }
  firstNameInputEl.style.borderBottomColor = 'red';
};

const lastNameError = () => {
  if (lastNameInputEl.value.trim() === '') {
    vText[1].textContent = 'Please fill this field';
  }
  lastNameInputEl.style.borderBottomColor = 'red';
};

const emailError = () => {
  if (emailInputEl.value.trim() === '') {
    vEmailText.textContent = 'Please enter a valid email address!';
  } else if (emailInputEl.validity.patternMismatch) {
    vEmailText.textContent =
      'Entered value needs to be a valid e-mail address!';
  }
  emailInputEl.style.borderBottomColor = 'red';
};

const passError = () => {
  if (passEl.value.trim() === '') {
    vPassText.textContent = 'Please fill this field';
  } else if (passEl.validity.patternMismatch) {
    vPassText.textContent =
      'Password must contain 8 characters or more with at least a digit!';
  }
  passEl.style.borderBottomColor = 'red';
};

const ageError = () => {
  const maxVal = 50;
  const minVal = 10;
  if (ageInputEl.value === '') {
    vText[2].textContent = 'Enter the age range - 10-50!';
  } else if (ageInputEl.value > maxVal || ageInputEl.value < minVal) {
    vText[2].textContent = 'Age should be between 10 - 50!';
  }
  ageInputEl.style.borderBottomColor = 'red';
};

const genderError = () => {
  if (!maleGenderEl.checked && !femaleGenderEl.checked) {
    vRadioText.textContent = 'Please select a gender!';
  }
};

// input eventListeners

firstNameInputEl.addEventListener('input', () => {
  if (firstNameInputEl.validity.valid) {
    vText[0].innerHTML = '';
    firstNameInputEl.style.borderBottomColor = 'purple';
  } else {
    firstNameError();
  }
});

lastNameInputEl.addEventListener('input', () => {
  if (lastNameInputEl.validity.valid) {
    vText[1].innerHTML = '';
    lastNameInputEl.style.borderBottomColor = 'purple';
  } else {
    lastNameError();
  }
});

emailInputEl.addEventListener('input', () => {
  if (emailInputEl.validity.valid) {
    vEmailText.innerHTML = '';
    emailInputEl.style.borderBottomColor = 'purple';
  } else {
    emailError();
  }
});

passEl.addEventListener('input', () => {
  if (passEl.validity.valid) {
    vPassText.innerHTML = '';
    passEl.style.borderBottomColor = 'purple';
  } else {
    passError();
  }
});

ageInputEl.addEventListener('input', () => {
  if (ageInputEl.validity.valid) {
    vText[2].innerHTML = '';
    ageInputEl.style.borderBottomColor = 'purple';
  } else {
    ageError();
  }
});

maleGenderEl.addEventListener('click', () => {
  if (maleGenderEl.checked) {
    vRadioText.innerHTML = '';
  }
});

femaleGenderEl.addEventListener('click', () => {
  if (femaleGenderEl.checked) {
    vRadioText.innerHTML = '';
  }
});

// form eventListener

form.addEventListener('submit', () => {
  if (
    firstNameInputEl.validity.valueMissing &&
    lastNameInputEl.validity.valueMissing &&
    emailInputEl.validity.valueMissing &&
    passEl.validity.valueMissing &&
    ageInputEl.validity.valueMissing &&
    !maleGenderEl.checked &&
    !femaleGenderEl.checked
  ) {
    firstNameError();
    lastNameError();
    emailError();
    passError();
    ageError();
    genderError();
    event.preventDefault();
  } else if (!firstNameInputEl.validity.valid) {
    firstNameError();
    event.preventDefault();
  } else if (!lastNameInputEl.validity.valid) {
    lastNameError();
    event.preventDefault();
  } else if (!emailInputEl.validity.valid) {
    emailError();
    event.preventDefault();
  } else if (!passEl.validity.valid) {
    passError();
    event.preventDefault();
  } else if (!ageInputEl.validity.valid) {
    ageError();
    event.preventDefault();
  } else if (!maleGenderEl.checked && !femaleGenderEl.checked) {
    genderError();
    event.preventDefault();
  } else {
    alertHandler();
    event.preventDefault();
  }
});
