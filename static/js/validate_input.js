//Fetching all the required tags
// Validate password
const passwordInput = document.getElementById('create-user-password');
const submitButton = document.getElementById('create-user-submit');
// Validate password match
const passwordErrorContainer = document.getElementById('password-length-error')
const confirmPassword = document.getElementById('create-user-confirm-password');
const confirmPasswordErrorContainer = document.getElementById('confirm-password-error')
// Disabling Submit Button
submitButton.disabled = true;
passwordInput.addEventListener('input', function() {
//   Password Length Validaiton
    if (passwordInput.value.length >= 6) {
    submitButton.disabled = false;
    confirmPasswordErrorContainer.classList.remove('d-none');
//   Password match validaiton
    if(passwordInput.value != confirmPassword.value)
        submitButton.disabled = true;
    passwordErrorContainer.classList.add('d-none');

  } else {
    submitButton.disabled = true;
    passwordErrorContainer.classList.remove('d-none');

  }
});

// Password Match validation
confirmPassword.addEventListener('input', function(event) {
    if (confirmPassword.value!='' && passwordInput.value == confirmPassword.value) {
      isPasswordMatch = true;
      if(isPasswordMatch && isEmailValidate )
      {
        submitButton.disabled = false;
        confirmPasswordErrorContainer.classList.add('d-none');
      }
  
  
    } else {
      isPasswordMatch = false;
      submitButton.disabled = true;
      confirmPasswordErrorContainer.classList.remove('d-none');
  
    }
  });
