"use strict";
let close = document.querySelector(".closebtn");
let open = document.querySelector(".modalbtn1");
let modal = document.querySelector(".modal1");
close.addEventListener("click", function () {
  modal.style.display = `none`;
});
open.addEventListener("click", function () {
  modal.style.display = `block`;
});
window.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = `none`;
  }
});
