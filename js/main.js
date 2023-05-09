const title = document.querySelector(".cats-title");
const logotype = document.querySelector(".site-logo img");
const body = document.querySelector("body");

console.log(logotype);

function onLogoClick() {
  logotype.classList.toggle("is-hidden");
}

title.addEventListener("click", onLogoClick);

const catPhoto = document.querySelector(".cat-photo");

function onPhotoClick() {
  catPhoto.src = "https://picsum.photos/200/300";
  catPhoto.width = "296";
  catPhoto.height = "370";
}
catPhoto.addEventListener("click", onPhotoClick);

const slider = document.querySelector(".hero-list");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

const mySiema = new Siema({
  selector: slider,
  loop: true,
  duration: 1000,
  easing: "cubic-bezier(.17,.67,.32,1.34)"
});

function onNextClick() {
  mySiema.next();
}

function onPrevClick() {
  mySiema.prev();
}

next.addEventListener("click", onNextClick);
prev.addEventListener("click", onPrevClick);

const lightbox = new SimpleLightbox(".gallery a", {
  closeText: "&#128473",
  fadeSpeed: 1000
});

AOS.init();
