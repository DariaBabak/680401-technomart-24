var letter = document.querySelector (".modal-letter");
var map = document.querySelector (".modal-map");
var buy = document.querySelector (".modal-buy");
var letterOpen = document.querySelector (".open-letter");
var mapOpen = document.querySelector (".map");
var buyOpen = document.querySelectorAll (".green-button");
var close = document.querySelector (".modal-close");
var mapClose = map.querySelector (".modal-close");
var buyClose = buy.querySelector (".modal-close");
var name = letter.querySelector (".name");
var email = letter.querySelector ("email");
var form = letter.querySelector ("form");
var storage = localStorage.getItem ("name");
var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("login");
  } catch (err) {
    isStorageSupport = false;
  }

letterOpen.addEventListener ("click", function (evt) {
  evt.preventDefault ();
  letter.classList.add ("modal-show");

  if (storage) {
    name.value = storage;
    email.focus ();
  } else {
    name.focus ();
  }
});

close.addEventListener ("click", function (evt) {
  evt.preventDefault ();
  letter.classList.remove ("modal-show");
  letter.classList.remove ("modal-error");
});

form.addEventListener ("submit", function (evt) {
  if (!name.value || !email.value) {
  evt.preventDefault ();
  letter.classList.add ("modal-error");
} else {
  if (isStorageSupport) {
    localStorage.setItem ("name", name.value);
  }
}
});

window.addEventListener ("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault ();
    if (letter.classList.contains ("modal-show")) {
      letter.classList.remove ("modal-show");
      letter.classList.remove ("modal-error");
    }
  }
});

mapOpen.addEventListener ("click", function (evt) {
  evt.preventDefault ();
  map.classList.add ("modal-show");
});
mapClose.addEventListener ("click", function (evt) {
  evt.preventDefault ();
  map.classList.remove ("modal-show");
});
window.addEventListener ("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (map.classList.contains ("modal-show")) {
      map.classList.remove ("modal-show");
    }
  }
});

buyOpen.addEventListener ("click", function (evt) {
  evt.preventDefault ();
  buy.classList.add ("modal-show");
});
buyClose.addEventListener ("click", function (evt) {
  evt.preventDefault ();
  buy.classList.remove ("modal-show");
});
window.addEventListener ("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (buy.classList.contains ("modal-show")) {
      buy.classList.remove ("modal-show");
    }
  }
});
