
  // Add script directly within the HTML body
  const passwordInput = document.querySelector('#passwordInput');
  const passwordLabel = document.querySelector('#passwordLabel');
  const visiblePassword = document.querySelector('#visiblePassword');
  const showPasswordCheckbox = document.querySelector('#showPassword');

  const strDefaultPassword = "**********************";

  const generateRandomPasswordInput = document.querySelector("#generateRandomPasswordInput");
  const generateRandomPasswordMinimumLengthInput = document.querySelector("#generateRandomPasswordMinimumLengthInput");
  const generateRandomPasswordMaximumLengthInput = document.querySelector("#generateRandomPasswordMaximumLengthInput");

  showPasswordCheckbox.addEventListener("change", function() {
    const strLabel = (this.checked) ? passwordInput.value : strDefaultPassword;
    visiblePassword.innerHTML = createLabel(strLabel);
  });
  passwordInput.addEventListener("keyup", function() {

    showPasswordCheckbox.dispatchEvent(new Event("change"));
  });

  document.addEventListener("DOMContentLoaded", function() {
    showPasswordCheckbox.dispatchEvent(new Event("change"));
  });

  generateRandomPasswordInput.addEventListener("click", function () {
    passwordInput.value = generateRandomPassword(parseInt(generateRandomPasswordMinimumLengthInput.value), parseInt(generateRandomPasswordMaximumLengthInput.value));
    showPasswordCheckbox.dispatchEvent(new Event("change"));
  });
