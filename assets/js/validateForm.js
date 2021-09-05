function formValidator() {
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  function emailValidator() {
    let atPos = email.indexOf('@');
    let dotPos = email.lastIndexOf('.');

    if(atPos < 1 || (dotPos - atPos) < 2) {
      document.querySelector('.textBox.email .alert').innerHTML = 'Looks like this is not an email';

      return false;
    }
    document.querySelector('.textArea.email .alert').innerHTML = '';
    return true;
  }

  if (firstName == '') {
    document.querySelector('.textBox.firstName .alert').innerHTML = 'Name cannot be empty';
  }
  if (lastName == '') {
    document.querySelector('.textBox.lastName .alert').innerHTML = 'Name cannot be empty';
  }
  if (email ==! '') {
    emailValidator();
  }

  if (password == '') {
    document.querySelector('.textBox.password .alert').innerHTML = 'Password cannot be empty';
  }

  return false;
}