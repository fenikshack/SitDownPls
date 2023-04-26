const selectRegion = document.querySelector(".region__select");
const choices = new Choices(selectRegion, {
  searchEnabled: false,
  itemSelectText: "",
  shouldSort: false,
});
// select cat
const selectCategory = document.querySelector(".category__select");
const choicesCategory = new Choices(selectCategory, {
  searchEnabled: false,
  itemSelectText: "",
  shouldSort: false,
});
// открытие меню (бургер)
const burgerBtn = document.querySelector(".header__burger");
const crossMenu = document.querySelector(".header__nav-btn");
const headerNav = document.querySelector(".header__nav");
const addMenu = document.querySelector(".addmenu");
burgerBtn.addEventListener("click", () => {
  headerNav.classList.add("header__nav-active");
  addMenu.classList.add("addmenu-active");
});
crossMenu.addEventListener("click", () => {
  headerNav.classList.remove("header__nav-active");
  addMenu.classList.remove("header__addmenu-active");
});
