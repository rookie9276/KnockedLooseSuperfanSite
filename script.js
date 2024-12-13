c0 = document.getElementById("Cover");
c1 = document.getElementById("Chapter1");
c2 = document.getElementById("Chapter2");
b0 = document.getElementById("Button");
c3 = document.getElementById("Chapter3");
c4 = document.getElementById("Chapter4");
c5 = document.getElementById("Chapter5");
c6 = document.getElementById("Chapter6");
bC = document.getElementById("BoxC");
b1 = document.getElementById("Box1");
b2 = document.getElementById("Box2");
bB = document.getElementById("BoxB");
b3 = document.getElementById("Box3");
b4 = document.getElementById("Box4");
b5 = document.getElementById("Box5");
b6 = document.getElementById("Box6");
m1 = document.getElementById("Band");

function stopSongs() {
  document.getElementById("Sound1").pause();
  document.getElementById("Sound1").currentTime = 0;
  document.getElementById("Sound2").pause();
  document.getElementById("Sound2").currentTime = 0;
  document.getElementById("Sound3").pause();
  document.getElementById("Sound3").currentTime = 0;
  document.getElementById("Sound4").pause();
  document.getElementById("Sound4").currentTime = 0;
  document.getElementById("Sound5").pause();
  document.getElementById("Sound5").currentTime = 0;
  document.getElementById("Sound6").pause();
  document.getElementById("Sound6").currentTime = 0;
  document.getElementById("Sound7").pause();
  document.getElementById("Sound7").currentTime = 0;
}
function changeCover() {
  stopSongs();
  c0.src = "images/Cover-after.png";
  document.getElementById("Sound1").play();
  c0.classList.remove("hover");
}

function changeOne() {
  stopSongs();
  c1.src = "images/Ch1-after.png";
  document.getElementById("Sound2").play();
  c1.classList.remove("hover");
  window.open("Ch1.html", "_blank");
}

function changeTwo() {
  stopSongs();
  c2.src = "images/Ch2-after.png";
  document.getElementById("Sound3").play();
  c2.classList.remove("hover");
  window.open("Ch2.html", "_blank");
}

function changeThree() {
  stopSongs();
  c3.src = "images/Ch3-after.png";
  document.getElementById("Sound4").play();
  c3.classList.remove("hover");
  window.open("Ch3.html", "_blank");
}

function changeFour() {
  stopSongs();
  c4.src = "images/Ch4-after.png";
  document.getElementById("Sound5").play();
  c4.classList.remove("hover");
  window.open("Ch4.html", "_blank");
}

function changeFive() {
  stopSongs();
  c5.src = "images/Ch5-after.png";
  document.getElementById("Sound6").play();
  c5.classList.remove("hover");
  window.open("Ch5.html", "_blank");
}

function changeSix() {
  stopSongs();
  c6.src = "images/Ch6-after.png";
  document.getElementById("Sound7").play();
  c6.classList.remove("hover");
  window.open("C6.html", "_blank");
}
function resetAll() {
  stopSongs();
  c0.src = "images/Cover.png";
  c1.src = "images/Ch1-before.png";
  c2.src = "images/Ch2-before.png";
  c3.src = "images/Ch3-before.png";
  c4.src = "images/Ch4-before.png";
  c5.src = "images/Ch5-before.png";
  c6.src = "images/Ch6-before.png";
  m1.src = "images/Band.png";
  c0.classList.add("hover");
  c1.classList.add("hover");
  c2.classList.add("hover");
  c3.classList.add("hover");
  c4.classList.add("hover");
  c5.classList.add("hover");
  c6.classList.add("hover");
  m1.classList.add("hover");
  document.getElementById("Sound8").play();
}

function changeBand() {
  m1.src = "images/Blue.png";
  m1.classList.remove("hover");
}
