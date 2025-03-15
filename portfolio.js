let content = document.getElementsByTagName("body")[0];
let darkmode = document.getElementsByClassName("darkmode")[0];
darkmode.addEventListener("click", function () {
  content.classList.toggle("dark");
});

document.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;

  const row1 = document.querySelector(".scrolling-row-1");
  const row2 = document.querySelector(".scrolling-row-2");

  const scrollSpeed = 0.2;
  row1.style.transform = `translateX(${100 - scrollPosition * scrollSpeed}px)`;
  row2.style.transform = `translateX(${scrollPosition * scrollSpeed}px)`;
});