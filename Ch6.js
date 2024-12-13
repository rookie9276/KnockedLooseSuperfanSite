document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded triggered"); 

  const box1 = document.querySelector(".box1");

  setTimeout(() => {
    box1.style.animation = "fadeIn 3s ease-in-out forwards";
  }, 300);
});

function changeBefore() {
  console.log("changeBefore triggered");
  const c0 = document.getElementById("glow");
  c0.src = "images(Ch-6)/Before2.png?cache=" + new Date().getTime();
  c0.classList.remove("hover");
  c0.classList.remove("clickable");
}

function changeButterflies() {
  console.log("changeButterflies triggered");
  const c1 = document.getElementById("fly");
  c1.src = "images(Ch-6)/Butterflies2.png?cache=" + new Date().getTime();
  c1.classList.remove("hover");
  c1.classList.remove("clickable");
}

function changeHug() {
  console.log("changeHug triggered");
  const c2 = document.getElementById("giving");
  c2.src = "images(Ch-6)/Hug2.png?cache=" + new Date().getTime();
  c2.classList.remove("hover");
  c2.classList.remove("clickable");
}
