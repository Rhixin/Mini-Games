"use strict";

document.querySelector(".enter").addEventListener("click", function () {
  const maxpts = Number(document.querySelector(".inputpts").value);
  if (maxpts <= 0) {
    document.querySelector(".invalid").style.color = "#ff0000";
  } else {
    localStorage.setItem("maxpts", maxpts);
    document.querySelector(".invalid").style.color = "#ffebb7";
  }
});

// document.querySelector(".rock").addEventListener("click", function () {
//   document.querySelector(".playerarena").style.color = "#ff0000";
//   debugger;
// });

// document.getElementById("rocks").addEventListener("click", function () {
//   console.log("test");
// });
