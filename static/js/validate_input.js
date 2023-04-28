//Fetching all the required tags
// Validate password
const passwordInput = document.getElementById('create-user-password');
const submitButton = document.getElementById('create-user-submit');
// Validate password match
const passwordErrorContainer = document.getElementById('password-length-error')
const confirmPassword = document.getElementById('create-user-confirm-password');
const confirmPasswordErrorContainer = document.getElementById('confirm-password-error')
const passwordMatchSuccessContainer = document.getElementById('confirm-password-match')
// Disabling Submit Button
submitButton.disabled = true;
passwordInput.addEventListener('input', function() {
//   Password Length Validaiton
    if (passwordInput.value.length >= 6) {
      passwordErrorContainer.classList.add('d-none');
//   Password match validaiton
    if(passwordInput.value != confirmPassword.value){
      isPasswordMatch = false;
      passwordMatchSuccessContainer.classList.add('d-none');
      confirmPasswordErrorContainer.classList.remove('d-none');
    }else{
      isPasswordMatch = true;
      passwordMatchSuccessContainer.classList.remove('d-none');
      confirmPassword.classList.add('d-none');

    }
    if(isPasswordMatch && isEmailValidate){
      submitButton.disabled = false;
    }else{
      submitButton.disabled = true;
    }
  } else {
    passwordErrorContainer.classList.remove('d-none');
    confirmPasswordErrorContainer.classList.add('d-none');
    passwordMatchSuccessContainer.classList.add('d-none')
    submitButton.disabled=true;
  }
});

// Password Match validation
confirmPassword.addEventListener('input', function(event) {
  if(event.currentTarget.value.length<6)
    {
      passwordMatchSuccessContainer.classList.add('d-none');
      return;
    }
    if (passwordInput.value.length>5  && passwordInput.value == confirmPassword.value) {
      isPasswordMatch = true;
      confirmPasswordErrorContainer.classList.add('d-none');
      passwordMatchSuccessContainer.classList.remove('d-none');
      if(isPasswordMatch && isEmailValidate )
        submitButton.disabled = false;
    } else {
      isPasswordMatch = false;
      submitButton.disabled = true;
      confirmPasswordErrorContainer.classList.remove('d-none');
      passwordMatchSuccessContainer.classList.add('d-none');
  
    }
  });
