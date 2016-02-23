var link = document.querySelector(".footer-contacts-btn");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var email = popup.querySelector("[name=email]");
var text = popup.querySelector("[name=text]");

var storage = localStorage.getItem("login");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");

  if (storage) {
          login.value = storage;
          email.focus();
        } else {
          login.focus();
        }

});
close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  popup.classList.remove("modal-error");
});
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
      popup.classList.remove("modal-error");
    }
  }
});
form.addEventListener("submit", function(event) {
  if (!login.value || !email.value || !text.value) {
      event.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    }else {
          localStorage.setItem("login", login.value);
    }
});
