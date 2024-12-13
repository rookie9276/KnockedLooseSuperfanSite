document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded triggered"); // Debug

  const box1 = document.querySelector(".box1");

  // Fade-in animation for box1
  setTimeout(() => {
    box1.style.animation = "fadeIn 3s ease-in-out forwards";
  }, 300);
});

function changeFire() {
  console.log("changeFire triggered");
  const c0 = document.getElementById("burning");
  c0.src = "images(Ch-4)/Fire2.png?cache=" + new Date().getTime();
  c0.classList.remove("hover");
  c0.classList.remove("clickable");
}

function changeBurn() {
  console.log("changeBurn triggered");
  const c1 = document.getElementById("hollow");
  c1.src = "images(Ch-4)/Burn2.png?cache=" + new Date().getTime();
  c1.classList.remove("hover");
  c1.classList.remove("clickable");
}

function changeGhost() {
  console.log("changeGhost triggered");
  const c2 = document.getElementById("white");
  c2.src = "images(Ch-4)/Ghost2.png?cache=" + new Date().getTime();
  c2.classList.remove("hover");
  c2.classList.remove("clickable");
}
