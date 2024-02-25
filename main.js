var showBtn = document.querySelector(".menu-button");
var xBtn = document.querySelector(".x-button");


showBtn.onclick = function () {
  document.querySelector('.menu').classList.remove('hide-menu');
  document.querySelector('.menu').classList.add('show-menu');
  document.querySelector('.display-none').classList.add("overlay");
};
xBtn.onclick = function () {
  document.querySelector('.menu').classList.add('hide-menu');
  document.querySelector('.menu').classList.remove('show-menu');
  document.querySelector('.display-none').classList.remove("overlay");
};