document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded triggered"); // Debug

  const box1 = document.querySelector(".box1");

  // Fade-in animation for box1
  setTimeout(() => {
    box1.style.animation = "fadeIn 3s ease-in-out forwards";
  }, 300);
});

function changeHand() {
  console.log("changeHand triggered");
  const c0 = document.getElementById("grab");
  c0.src = "images(Ch-2)/Hand2.png?cache=" + new Date().getTime();
  c0.classList.remove("hover");
  c0.classList.remove("clickable");
}

function changeDoor() {
  console.log("changeDoor triggered");
  const c1 = document.getElementById("rest");
  c1.src = "images(Ch-2)/Door2.png?cache=" + new Date().getTime();
  c1.classList.remove("hover");
  c1.classList.remove("clickable");
}

function changeFuneral() {
  console.log("changeFuneral triggered");
  const c2 = document.getElementById("death");
  c2.src = "images(Ch-2)/Funeral2.png?cache=" + new Date().getTime();
  c2.classList.remove("hover");
  c2.classList.remove("clickable");
}
