document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded triggered"); 

  const box1 = document.querySelector(".box1");

  setTimeout(() => {
    box1.style.animation = "fadeIn 3s ease-in-out forwards";
  }, 300);
});

function changeGrab() {
  console.log("changeGrab triggered");
  const c0 = document.getElementById("ball");
  c0.src = "images(CH-3)/Grab2.png?cache=" + new Date().getTime();
  c0.classList.remove("hover");
  c0.classList.remove("clickable");
}

function changeStuck() {
  console.log("changeStuck triggered");
  const c1 = document.getElementById("still");
  c1.src = "images(CH-3)/Stuck2.png?cache=" + new Date().getTime();
  c1.classList.remove("hover");
  c1.classList.remove("clickable");
}

function changeEyes() {
  console.log("changeEyes triggered");
  const c2 = document.getElementById("giving");
  c2.src = "images(CH-3)/Eyes2.png?cache=" + new Date().getTime();
  c2.classList.remove("hover");
  c2.classList.remove("clickable");
}
