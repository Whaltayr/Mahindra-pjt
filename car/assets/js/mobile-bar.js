// const open_button = document.querySelector("#open-btn");
// const close_button = document.querySelector("#close-btn");
// const sidebar = document.querySelector("#sidebar");

// function showSidebar() {
//   sidebar.style.display = "flex";
// }
// function hideSidebar() {
//   sidebar.style.display = "none";
// }
// JS: toggle a class on .mobile-menu instead of inline styles
const openBtn  = document.querySelector("#open-btn");
const closeBtn = document.querySelector("#close-btn");
const menu     = document.querySelector(".mobile-menu");

function showSidebar() {
  menu.classList.add("open");    // shows the whole panel
  openBtn.style.display = "none"; // hide hamburger
}
function hideSidebar() {
  menu.classList.remove("open"); // hide panel
  openBtn.style.display = "";    // restore hamburger
}

openBtn.addEventListener("click", showSidebar);
closeBtn.addEventListener("click", hideSidebar);

