function formValidator(event) {
  event.preventDefault();

  var firstName = document.querySelector('.textBox.firstName input');
  var lastName = document.querySelector('.textBox.lastName input');
  var email = document.querySelector('.textBox.email input');
  var password = document.querySelector('.textBox.password input');

  console.log(email, password, firstName, lastName);

  function emailValidator() {
    console.log('here!')
    let atPos = email.value.indexOf('@');
    let dotPos = email.value.lastIndexOf('.');

    if(atPos < 1 || (dotPos - atPos) < 2) {
      document.querySelector('.textBox.email .alert').innerHTML = 'Looks like this is not an email';
      
      return false
    }
    document.querySelector('.textArea.email .alert').innerHTML = '';
    return true;
  }

  if (firstName.value == '') {
    firstName.classList.add('failed');
    document.querySelector('.textBox.firstName .alert').classList.add('failed');
    document.querySelector('.textBox.firstName img').classList.add('failed');
  }
  if (lastName.value == '') {
    lastName.classList.add('failed');
    document.querySelector('.textBox.firstName .alert').classList.add('failed');
    document.querySelector('.textBox.firstName img').classList.add('failed');
  }
  if (email ==! '') {
    emailValidator();
  }
  else if(email.value == '') {
    email.classList.add('failed');
    document.getElementsByName('Email')[0].placeholder='Email cannot be empty';

    document.querySelector('.textBox.email .alert').classList.add('failed');
    document.querySelector('.textBox.email img').classList.add('failed');
  }

  if (password.value == '') {
    password.classList.add('failed');
    document.querySelector('.textBox.password .alert').classList.add('failed');
    document.querySelector('.textBox.password img').classList.add('failed');
  }
}