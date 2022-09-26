const navToggle = document.querySelector(".nav-toggle");
navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

function topnav() {
  var x = getElementById("topnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
  });
});
const scrollElements = document.querySelectorAll(".scroll-animation");
