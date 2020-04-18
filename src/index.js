import "./styles.css";

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

const showError = (input, message) => {
  const controlForm = input.parentElement;
  controlForm.className = "form-control error";
  controlForm.querySelector("small").innerText = message;
};

const showSuccess = input => {
  const controlForm = input.parentElement;
  controlForm.className = "form-control success";
};

const checkRequired = inputArray => {
  inputArray.forEach(input => {
    if (input.value.trim() === "") {
      showError(input, `${getFieldname(input)} can't be empty!`);
    } else showSuccess(input);
  });
};

const checkLength = (input, min, max) => {
  if (input.value.length <= max && input.value.length >= min) {
    showSuccess(input);
  } else {
    showError(
      input,
      `${getFieldname(
        input
      )} needs to be more than ${min} char and less than ${max} char`
    );
  }
};

const getFieldname = input => {
  return `${input.id.charAt(0).toUpperCase()}${input.id.slice(1)}`;
};

// Event listeners
form.addEventListener("submit", function(e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  // checkEmail(email);
  // checkPasswordsMatch(password, password2);
});
