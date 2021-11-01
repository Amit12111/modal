"use strict";
let close = document.querySelector(".closebtn");
let open = document.querySelector(".modalbtn1");
let modal = document.querySelector(".modal1");
// close.addEventListener("click", function () {
//   modal.classList.remove("in");
//   modal.classList.add("back");
//   modal.style.display = `none`;
// });
open.addEventListener("click", function () {
  modal.classList.remove("back");
  modal.classList.add("in");
  modal.style.display = `block`;
});
document.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = `none`;
  }
});

window.addEventListener("keydown", function (e) {
  if (e.key === "Enter" && modal.style.display ===`block`) {
    modal.style.display = `none`;
  }
});

//  ewainy's code
close.addEventListener("click", function () {
  modal.classList.add('effect');
  setTimeout(()=>{ 
    modal.style.display = 'none';
    modal.classList.remove('effect');
  },1000)
});
