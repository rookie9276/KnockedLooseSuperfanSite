document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded triggered"); 

  const box1 = document.querySelector(".box1");
  const driveImage = document.getElementById("drive");

  setTimeout(() => {
    box1.style.animation = "fadeIn 3s ease-in-out forwards";
  }, 300);

  setTimeout(() => {
    driveImage.classList.add("fade-in");
  }, 300);
});

function changeCar() {
  console.log("changeCar triggered");
  const c0 = document.getElementById("drive");
  c0.src = "images(Ch-1)/Car2.png?cache=" + new Date().getTime();
  c0.classList.remove("hover");
  c0.classList.remove("clickable");
}

function changeDemon() {
  console.log("changeCar triggered");
  const c1 = document.getElementById("scary");
  c1.src = "images(Ch-1)/Demon2.png?cache=" + new Date().getTime();
  c1.classList.remove("hover");
  c1.classList.remove("clickable");
}

function changeBody() {
  console.log("changeCar triggered");
  const c2 = document.getElementById("dead");
  c2.src = "images(Ch-1)/body2.png?cache=" + new Date().getTime();
  c2.classList.remove("hover");
  c2.classList.remove("clickable");
}
