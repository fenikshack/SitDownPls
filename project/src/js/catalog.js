// select reg
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


// range
let range = document.getElementById("range");

noUiSlider.create(range, {
  range: {
    min: 0,
    max: 200000,
  },
  start: [2000, 150000],
  connect: true,
  tooltips: true,
});

// enter value input
const priceMin = document.getElementById("price-min");
const priceMax = document.getElementById("price-max");
priceMin.addEventListener("input", () => {
  range.noUiSlider.set([priceMin.value, null]);
});
priceMax.addEventListener("input", () => {
  range.noUiSlider.set([null, priceMax.value]);
});
let leftValue;
let rightValue;
let count = 0;

range.noUiSlider.on("update", function (values, handle) {
  priceMin.value = Math.round(values[0]);
  priceMax.value = Math.round(values[1]);

  if (values[0] != leftValue && count > 1) {
    leftValue = values[0];
    document
      .querySelector(".noUi-handle-lower")
      .querySelector(".noUi-tooltip").textContent =
      "От " +
      document
        .querySelector(".noUi-handle-lower")
        .querySelector(".noUi-tooltip").textContent;
  } else {
    count++;
  }
  if (values[1] != rightValue) {
    rightValue = values[1];
    document
      .querySelector(".noUi-handle-upper")
      .querySelector(".noUi-tooltip").textContent =
      "До " +
      document
        .querySelector(".noUi-handle-upper")
        .querySelector(".noUi-tooltip").textContent;
  }
});


const leftHande = document.querySelector(".noUi-handle-lower");
const rightHande = document.querySelector(".noUi-handle-upper");
leftHande.addEventListener("mousedown", () => {
  document.querySelector(".noUi-connect").classList.add("noUi-connect--active");
});
leftHande.addEventListener("focus", () => {
  document.querySelector(".noUi-connect").classList.add("noUi-connect--active");
});
leftHande.addEventListener("blur", () => {
  document
    .querySelector(".noUi-connect")
    .classList.remove("noUi-connect--active");
});
rightHande.addEventListener("mousedown", () => {
  document.querySelector(".noUi-connect").classList.add("noUi-connect--active");
});
rightHande.addEventListener("focus", () => {
  document.querySelector(".noUi-connect").classList.add("noUi-connect--active");
});
rightHande.addEventListener("blur", () => {
  document
    .querySelector(".noUi-connect")
    .classList.remove("noUi-connect--active");
});

// tab
function createTabDesktop() {
  const tabBtn1 = document.querySelector('[data-tabbtn="1"]');
  const tabBtn2 = document.querySelector('[data-tabbtn="2"');
  const tabContent1 = document.querySelectorAll('[data-tab="first"]');
  const tabContent2 = document.querySelectorAll('[data-tab="second"]');

  tabBtn2.addEventListener("click", () => {
    tabContent1.forEach((item) => {
      item.classList.add("catalog-card--display");
    });
    tabContent2.forEach((item) => {
      item.classList.remove("catalog-card--display");
    });
    tabBtn1.classList.remove("content__btn--active");
    tabBtn2.classList.add("content__btn--active");
    tabBtn2.blur();
  });

  tabBtn1.addEventListener("click", () => {
    tabContent2.forEach((item) => {
      item.classList.add("catalog-card--display");
    });
    tabContent1.forEach((item) => {
      item.classList.remove("catalog-card--display");
    });
    tabBtn2.classList.remove("content__btn--active");
    tabBtn1.classList.add("content__btn--active");
    tabBtn1.blur();
  });
}

function createTabTablet() {
  const tabBtnTablet1 = document.querySelector('[data-tabbtn="1"]');
  const tabBtnTablet2 = document.querySelector('[data-tabbtn="2"');
  const tabBtnTablet3 = document.querySelector('[data-tabbtn="3"');
  const tabContentTablet1 = document.querySelectorAll(
    '[data-tab-mobile="first"]'
  );
  const tabContentTablet2 = document.querySelectorAll(
    '[data-tab-mobile="second"]'
  );
  const tabContentTablet3 = document.querySelectorAll(
    '[data-tab-mobile="third"]'
  );

  tabBtnTablet2.addEventListener("click", () => {
    document.querySelectorAll(".catalog-card").forEach((item) => {
      item.classList.add("catalog-card--display-mobile");
    });
    tabContentTablet2.forEach((item) => {
      item.classList.remove("catalog-card--display-mobile");
    });
    document
      .querySelector(".content__btn--active")
      .classList.remove("content__btn--active");
    tabBtnTablet2.classList.add("content__btn--active");
    tabBtnTablet2.blur();
  });
  tabBtnTablet3.addEventListener("click", () => {
    document.querySelectorAll(".catalog-card").forEach((item) => {
      item.classList.add("catalog-card--display-mobile");
    });
    tabContentTablet3.forEach((item) => {
      item.classList.remove("catalog-card--display-mobile");
    });
    document
      .querySelector(".content__btn--active")
      .classList.remove("content__btn--active");
    tabBtnTablet3.classList.add("content__btn--active");
    tabBtnTablet3.blur();
  });
  tabBtnTablet1.addEventListener("click", () => {
    document.querySelectorAll(".catalog-card").forEach((item) => {
      item.classList.add("catalog-card--display-mobile");
    });
    tabContentTablet1.forEach((item) => {
      item.classList.remove("catalog-card--display-mobile");
    });
    document
      .querySelector(".content__btn--active")
      .classList.remove("content__btn--active");
    tabBtnTablet1.classList.add("content__btn--active");
    tabBtnTablet1.blur();
  });
}
const screenWidth = window.screen.width;
if (screenWidth > 1006) {
  createTabDesktop();
} else {
  createTabTablet();
}

// checkbox select
const btnSelectFilter = document.querySelectorAll(".filter__checkbox-btn");
btnSelectFilter.forEach((item) => {
  item.addEventListener("click", () => {
    const container = item.closest("div");
    const droplist = container.querySelector(".filter__checkbox-container");
    if (
      document.querySelector(".filter__checkbox-btn--active") &&
      document.querySelector(".filter__checkbox-btn--active") != item
    ) {
      document
        .querySelector(".filter__checkbox-btn--active")
        .classList.remove("filter__checkbox-btn--active");
    }
    if (
      document.querySelector(".filter__checkbox-container--active") &&
      document.querySelector(".filter__checkbox-container--active") != droplist
    ) {
      document
        .querySelector(".filter__checkbox-container--active")
        .classList.remove("filter__checkbox-container--active");
    }
    item.classList.toggle("filter__checkbox-btn--active");

    droplist.classList.toggle("filter__checkbox-container--active");
  });
});

