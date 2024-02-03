const passwordInput = document.getElementById("password"),
  confirmPasswordInput = document.getElementById("confirm-password"),
  errorSpan = document.querySelector("span.input-error"),
  form = document.getElementById("sign-up-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (passwordInput.value === confirmPasswordInput.value) {
    passwordInput.classList.remove("error");
    confirmPasswordInput.classList.remove("error");
    errorSpan.classList.remove("error");
    errorSpan.classList.add("success");
    errorSpan.textContent = "*Both Passwords matched";
  } else {
    errorSpan.classList.remove("success");
    passwordInput.classList.add("error");
    confirmPasswordInput.classList.add("error");
    errorSpan.classList.add("error");
    errorSpan.textContent = "*Passwords do not match";
  }
});
