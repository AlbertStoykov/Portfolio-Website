// const navToggle = document.querySelector(".nav-toggle");
// navToggle.addEventListener("click", () => {
//   document.body.classList.toggle("nav-open");
// });

// function topnav() {
//   var x = getElementById("topnav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
});
const scrollElements = document.querySelectorAll(".scroll-animation");
scrollElements.forEach((el) => observer.observe(el));
