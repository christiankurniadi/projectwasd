// const btnHamburger = ;
// const header = document.querySelector(".header");
// const overlay = ;
// const body = ;
// const link = document.querySelector(".link");

document.querySelector("#btnHamburger").addEventListener("click", function () {
  document.querySelector(".header").classList.toggle("open");
  document.querySelector(".overlay").classList.toggle("fade-in");
  document.querySelector(".overlay").classList.toggle("fade-out", !document.querySelector(".overlay").classList.contains("fade-in"));
  // Overflow hidden
  if (document.querySelector(".header").classList.contains("open")) {
    document.querySelector("body").classList.add("noscroll");
  } else {
    document.querySelector("body").classList.remove("noscroll");
  }
});

document.onclick = function (e) {
  if (e.target.classList == "link") {
    document.querySelector(".header").classList.toggle("open");
    document.querySelector(".overlay").classList.toggle("fade-in");
    document.querySelector(".overlay").classList.toggle("fade-out", !document.querySelector(".overlay").classList.contains("fade-in"));

    // Overflow hidden
    // if (document.querySelector(".header").classList.contains("open")) {
    //   body.classList.add("noscroll");
    // } else {
    //   body.classList.remove("noscroll");
    // }
  }
};
