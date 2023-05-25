let computerChoice = Math.trunc(Math.random() * 3) + 1;
const maxpts = Number(localStorage.getItem("maxpts"));
let pointsofplayer = 0;
let pointsofcomputer = 0;

document.querySelector(".rock").addEventListener("click", function () {
  computerChoice = Math.trunc(Math.random() * 3) + 1;
  document.querySelector(".r").style.opacity = "100%";
  document.querySelector(".p").style.opacity = "0%";
  document.querySelector(".s").style.opacity = "0%";
  if (computerChoice === 1) {
    document.querySelector(".r1").style.opacity = "100%";
    document.querySelector(".p1").style.opacity = "0%";
    document.querySelector(".s1").style.opacity = "0%";
  } else if (computerChoice === 2) {
    document.querySelector(".r1").style.opacity = "0%";
    document.querySelector(".p1").style.opacity = "100%";
    document.querySelector(".s1").style.opacity = "0%";
    pointsofcomputer++;
  } else {
    document.querySelector(".r1").style.opacity = "0%";
    document.querySelector(".p1").style.opacity = "0%";
    document.querySelector(".s1").style.opacity = "100%";
    pointsofplayer++;
  }

  document.querySelector(".pointscounterplayer").textContent = pointsofplayer;
  document.querySelector(".pointscountercomputer").textContent =
    pointsofcomputer;

  if (pointsofplayer === maxpts) {
    document.querySelector(".playerarena").style.backgroundColor = "#60b347";
    document.querySelector(".computerarena").style.backgroundColor = "#ff0000";
  } else if (pointsofcomputer === maxpts) {
    document.querySelector(".playerarena").style.backgroundColor = "#ff0000";
    document.querySelector(".computerarena").style.backgroundColor = "#60b347";
  }
});
document.querySelector(".paper").addEventListener("click", function () {
  computerChoice = Math.trunc(Math.random() * 3) + 1;
  document.querySelector(".r").style.opacity = "0%";
  document.querySelector(".p").style.opacity = "100%";
  document.querySelector(".s").style.opacity = "0%";
  if (computerChoice === 1) {
    document.querySelector(".r1").style.opacity = "100%";
    document.querySelector(".p1").style.opacity = "0%";
    document.querySelector(".s1").style.opacity = "0%";
    pointsofplayer++;
  } else if (computerChoice === 2) {
    document.querySelector(".r1").style.opacity = "0%";
    document.querySelector(".p1").style.opacity = "100%";
    document.querySelector(".s1").style.opacity = "0%";
  } else {
    document.querySelector(".r1").style.opacity = "0%";
    document.querySelector(".p1").style.opacity = "0%";
    document.querySelector(".s1").style.opacity = "100%";
    pointsofcomputer++;
  }

  document.querySelector(".pointscounterplayer").textContent = pointsofplayer;
  document.querySelector(".pointscountercomputer").textContent =
    pointsofcomputer;

  if (pointsofplayer === maxpts) {
    document.querySelector(".playerarena").style.backgroundColor = "#60b347";
    document.querySelector(".computerarena").style.backgroundColor = "#ff0000";
  } else if (pointsofcomputer === maxpts) {
    document.querySelector(".playerarena").style.backgroundColor = "#ff0000";
    document.querySelector(".computerarena").style.backgroundColor = "#60b347";
  }
});

document.querySelector(".scissor").addEventListener("click", function () {
  computerChoice = Math.trunc(Math.random() * 3) + 1;
  document.querySelector(".r").style.opacity = "0%";
  document.querySelector(".p").style.opacity = "0%";
  document.querySelector(".s").style.opacity = "100%";
  if (computerChoice === 1) {
    document.querySelector(".r1").style.opacity = "100%";
    document.querySelector(".p1").style.opacity = "0%";
    document.querySelector(".s1").style.opacity = "0%";
    pointsofcomputer++;
  } else if (computerChoice === 2) {
    document.querySelector(".r1").style.opacity = "0%";
    document.querySelector(".p1").style.opacity = "100%";
    document.querySelector(".s1").style.opacity = "0%";
    pointsofplayer++;
  } else {
    document.querySelector(".r1").style.opacity = "0%";
    document.querySelector(".p1").style.opacity = "0%";
    document.querySelector(".s1").style.opacity = "100%";
  }

  document.querySelector(".pointscounterplayer").textContent = pointsofplayer;
  document.querySelector(".pointscountercomputer").textContent =
    pointsofcomputer;

  if (pointsofplayer === maxpts) {
    document.querySelector(".playerarena").style.backgroundColor = "#60b347";
    document.querySelector(".computerarena").style.backgroundColor = "#ff0000";
  } else if (pointsofcomputer === maxpts) {
    document.querySelector(".playerarena").style.backgroundColor = "#ff0000";
    document.querySelector(".computerarena").style.backgroundColor = "#60b347";
  }
});

document.querySelector(".again1").addEventListener("click", function () {
  pointsofcomputer = 0;
  pointsofplayer = 0;
  document.querySelector(".playerarena").style.backgroundColor = "#ffebb7";
  document.querySelector(".computerarena").style.backgroundColor = "#ffebb7";
  document.querySelector(".r1").style.opacity = "0%";
  document.querySelector(".p1").style.opacity = "0%";
  document.querySelector(".s1").style.opacity = "0%";
  document.querySelector(".r").style.opacity = "0%";
  document.querySelector(".p").style.opacity = "0%";
  document.querySelector(".s").style.opacity = "0%";
  document.querySelector(".pointscounterplayer").textContent = pointsofplayer;
  document.querySelector(".pointscountercomputer").textContent =
    pointsofcomputer;
});
