"use strict";
let close = document.querySelector(".closebtn");
let open = document.querySelector(".modalbtn1");
let modal = document.querySelector(".modal1");
close.addEventListener("click", function () {
  modal.classList.remove("in");
  modal.classList.add("back");
  modal.style.display = `none`;
});
open.addEventListener("click", function () {
  modal.classList.remove("back");
  modal.classList.add("in");
  modal.style.display = `block`;
});
window.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = `none`;
  }
});
