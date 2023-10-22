// navbar
window,
  addEventListener("scroll", function () {
    let header = this.document.querySelector(".navbar");
    header.classList.toggle("active", this.scrollY > 10);
  });
// menu
let menu = document.querySelector(".menu");
let menuBtn = document.querySelector(".menu-btn");
let menuBtnI = document.querySelector(".menu-btn i");
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  if (menuBtnI.classList.contains("fa-bars")) {
    menuBtnI.classList.replace("fa-bars", "fa-xmark");
  } else {
    menuBtnI.classList.replace("fa-xmark", "fa-bars");
  }
});

// change color
function changeColor(color) {
  document.querySelectorAll(".color").forEach(function (items) {
    items.classList.remove("active");
  });
  event.target.classList.add("active");
}
let pic = document.querySelector("#main-shoe"),
  color = document.querySelector(".color"),
  blue = document.querySelector(".blue"),
  cyan = document.querySelector(".cyan"),
  green = document.querySelector(".green"),
  pink = document.querySelector(".pink"),
  purple = document.querySelector(".purple"),
  red = document.querySelector(".red");
const colors = document.querySelectorAll(".colors");
var info = [
  {
    src: "image/products/blue.png",
  },
  {
    src: "image/products/cyan.png",
  },
  {
    src: "image/products/green.png",
  },
  {
    src: "image/products/pink.png",
  },
  {
    src: "image/products/purple.png",
  },
  {
    src: "image/products/red.png",
  },
];

blue.addEventListener("click", function () {
  pic.src = info[0].src;
});

cyan.addEventListener("click", function () {
  pic.src = info[1].src;
});

green.addEventListener("click", function () {
  pic.src = info[2].src;
});

pink.addEventListener("click", function () {
  pic.src = info[3].src;
});

purple.addEventListener("click", function () {
  pic.src = info[4].src;
});
red.addEventListener("click", function () {
  pic.src = info[5].src;
});
