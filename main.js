function diklik() {
  document.querySelector(".header").style.marginTop = "0";
  document.querySelector(".notification").style.marginTop = "0";
  document.querySelector(".notification").style.transform = "TranslateY(-100%)";
}

const close = document.querySelector(".close"),
  newsletter = document.querySelector(".newsletter");
window.addEventListener("load", function () {
  setTimeout(function open() {
    document.querySelector(".newsletter").style.transform = "TranslateY(0)";
  }, 1000);
});

close.addEventListener("click", () => {
  document.querySelector(".newsletter").style.transform = "TranslateY(100%)";
});
