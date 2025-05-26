const checkbox = document.querySelector(".input-check");
const inputs = document.querySelectorAll(".Username, .Password");
const inputsRegister = document.querySelectorAll(".UsernameRegister, .PasswordRegister");
const bgVideo = document.querySelector(".bg-video");
const loginForm = document.querySelector(".login-form");
const registerLink = document.querySelector(".register-link");
const registerForm = document.querySelector(".register-form");
const loginLink = document.querySelector(".login-link");
const loginLight = document.querySelector('.login-light');

function onCheckboxChange() {
  toggleBgVideo();
}

document.querySelectorAll('.input-check').forEach(cb => {
  cb.addEventListener('change', onCheckboxChange);
});

function getActiveCheckbox() {
  if (loginForm.classList.contains("active")) {
    return loginForm.querySelector(".input-check");
  } else if (registerForm.classList.contains("active")) {
    return registerForm.querySelector(".input-check");
  }
  return null;
}


function toggleBgVideo() {
  const bgVideo = document.querySelector(".bg-video");
  const checkbox = getActiveCheckbox();
  if (checkbox && checkbox.checked) {
    bgVideo.classList.add("bg-active");
  } else {
    bgVideo.classList.remove("bg-active");
  }
}


function shouldKeepEffect() {
  let activeInputs;
  if (loginForm.classList.contains("active")) {
    activeInputs = loginForm.querySelectorAll(".Username, .Password");
  } else if (registerForm.classList.contains("active")) {
    activeInputs = registerForm.querySelectorAll(".UsernameRegister, .PasswordRegister");
  } else {
    activeInputs = [];
  }
  return Array.from(activeInputs).some(
    input => document.activeElement === input || input.value.trim() !== ""
  );
}

function UpdateEffects() {
  const checkbox = getActiveCheckbox();
  if (checkbox) {
    const shouldBeChecked = shouldKeepEffect();
    if (checkbox.checked !== shouldBeChecked) {
      checkbox.checked = shouldBeChecked;
    }
  }
  toggleBgVideo();
}
function InputEventUpdate() {
  const allInputs = document.querySelectorAll(".Username, .Password, .UsernameRegister, .PasswordRegister");
  allInputs.forEach((input) => {
    input.addEventListener("focus", UpdateEffects);
    input.addEventListener("blur", UpdateEffects);
    input.addEventListener("input", UpdateEffects);
  });
}
InputEventUpdate();


function toggleForms() {
  loginForm.classList.toggle("active");
  registerForm.classList.toggle("active");
  registerLink.classList.toggle("active");
  UpdateEffects();
}
registerLink.addEventListener("click", () => {
  toggleForms();

});

loginLink.addEventListener("click", () => {
  toggleForms();

} );





