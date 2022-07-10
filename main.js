// const button = document.querySelector(".gotit"),
//   notification = document.querySelector(".notification");

// button.addEventListener("click", () => {
//   notification.classList.add("visually-hidden");
// });

function diklik() {
  const notification = document.querySelector(".notification");
  document.querySelector(".header").style.margin = "0";
  // document.querySelector(".notification").style.height = "0";

  if (document.querySelector(".notification").style.height === "0") {
    notification.classList.remove(".notification");
  } else {
    true;
  }
}

const close = document.querySelector(".close"),
  newsletter = document.querySelector(".newsletter");

close.addEventListener("click", () => {
  newsletter.classList.add("visually-hidden");
});
