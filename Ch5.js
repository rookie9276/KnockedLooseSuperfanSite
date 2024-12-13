document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded triggered"); // Debug

  const box1 = document.querySelector(".box1");

  // Fade-in animation for box1
  setTimeout(() => {
    box1.style.animation = "fadeIn 3s ease-in-out forwards";
  }, 300);
});

function changeDig() {
  console.log("changeDig triggered");
  const c0 = document.getElementById("love");
  c0.src = "images(Ch-5)/Dig2.png?cache=" + new Date().getTime();
  c0.classList.remove("hover");
  c0.classList.remove("clickable");
}

function changeArm() {
  console.log("changeArm triggered");
  const c1 = document.getElementById("broken");
  c1.src = "images(Ch-5)/Arm2.png?cache=" + new Date().getTime();
  c1.classList.remove("hover");
  c1.classList.remove("clickable");
}

function changeHead() {
  console.log("changeHead triggered");
  const c2 = document.getElementById("carry");
  c2.src = "images(Ch-5)/Head2.png?cache=" + new Date().getTime();
  c2.classList.remove("hover");
  c2.classList.remove("clickable");
}
