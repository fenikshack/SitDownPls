// выбрать регион
const selectRegion = document.querySelector(".region__select");
const choices = new Choices(selectRegion, {
  searchEnabled: false,
  itemSelectText: "",
  shouldSort: false,
});

// выбрать категорию
const selectCategory = document.querySelector(".category__select");
const choicesCategory = new Choices(selectCategory, {
  searchEnabled: false,
  itemSelectText: "",
  shouldSort: false,
});

// бургер
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
  addMenu.classList.remove("addmenu-active");
});

// swiper hero
let swiper = new Swiper("#swiper-hero", {
  autoplay: {
    delay: 4000,
    pauseOnMouseEnter: true,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    renderBullet: function (index, className) {
      return `<div class="${className}"> <div class="wrapper" data-anim="base wrapper"><div class="circle" data-anim="base left"></div><div class="circle" data-anim="base right"></div></div></div>`;
    },
    type: 'bullets',
    clickable: true,

  },
});

// swiper special
let swiperSpecial = new Swiper("#swiper-special", {
  navigation: {
    nextEl: ".special__swiper-button-next",
    prevEl: ".special__swiper-button-prev",
  },
  breakpoints: {
    1389: {
      slidesPerView: "auto",
      slidesPerGroup: 3,
      spaceBetween: 32,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 32,
    },
    763: {
      slidesPerView: 2,
      spaceBetween: 32,
      slidesPerGroup: 2,
    },
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 32,
    },
  },
});

// кнопка посмотреть ещё
const seeMoreBtn = document.querySelector(".rating__btn");
const hideCard = document.querySelectorAll(".catalog-card--display");
const hideItem = document.querySelectorAll(".rating__item--hide");
const hideCardLap = document.querySelectorAll(".catalog-card--laptop");
const hideItemLap = document.querySelectorAll(".rating__item--laptop");
seeMoreBtn.addEventListener("click", () => {
  hideCard.forEach((item) => {
    item.classList.add("catalog-card--block");
  });
  hideItem.forEach((item) => {
    item.classList.add("catalog-card--block");
  });
  hideCardLap.forEach((item) => {
    item.classList.add("catalog-card--block");
  });
  hideItemLap.forEach((item) => {
    item.classList.add("catalog-card--block");
  });
  seeMoreBtn.classList.add("rating__btn-hide");
});


// свайпер полезное
let swiperUseful = new Swiper("#swiper-useful", {
  navigation: {
    nextEl: ".useful__swiper-button-next",
    prevEl: ".useful__swiper-button-prev",
  },

  breakpoints: {
    1025: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    769: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
    584: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
});

// тултип
tippy(".feedback__form-tooltip", {
  content:
    "Реплицированные с зарубежных источников, исследования формируют глобальную сеть.",
  maxWidth: 250,
});


// модальное окно
document.querySelector(".feedback-form ").addEventListener("submit", (e) => {
  e.preventDefault();
   if (validateName() && validatePhone() && validateEmail()) {
    new GraphModal().open("first");
    document.querySelectorAll(".feedback-form__input").forEach((item) => {
      item.value = "";
    });
  }
});


//валидация формы
function validateName() {
  const inputName = document.querySelector('[data-validate-field="name"]');
  const parent = inputName.closest("label");
  let divError = document.createElement("div");
  divError.classList.add("error-massage");
  divError.textContent = "Пожалуйста, введите имя";
  if (inputName.value.trim() === "") {
    inputName.classList.add("feedback-form__input--error");
    if (!parent.querySelector("div")) {
      parent.append(divError);
    }
    return false;
  } else {
    if (parent.querySelector(".error-massage")) {
      parent.querySelector(".error-massage").remove();
      inputName.classList.remove("feedback-form__input--error");
    }
    return true;
  }
}

  function validatePhone() {
  const inputTel = document.querySelector('[data-validate-field="tel"]');
  const parent = inputTel.closest("label");
  let divError = document.createElement("div");
  divError.classList.add("error-massage");
  divError.textContent = "Пожалуйста, введите номер телефона";
  if (inputTel.value.trim() === "") {
    inputTel.classList.add("feedback-form__input--error");
    if (!parent.querySelector("div")) {
      parent.append(divError);
    }
    return false;
  } else {
    if (parent.querySelector(".error-massage")) {
      parent.querySelector(".error-massage").remove();
      inputTel.classList.remove("feedback-form__input--error");
    }
    return true;
  }
}

function validateEmail() {
  const inputEmail = document.querySelector('[data-validate-field="email"]');
  const parent = inputEmail.closest("label");
  let divError = document.createElement("div");
  divError.classList.add("error-massage");
  divError.textContent = "Пожалуйста, введите e-mail";
  if (inputEmail.value.trim() === "") {
    inputEmail.classList.add("feedback-form__input--error");
    if (!parent.querySelector("div")) {
      parent.append(divError);
    }
    return false;
  } else {
    if (parent.querySelector(".error-massage")) {
      parent.querySelector(".error-massage").remove();

      inputEmail.classList.remove("feedback-form__input--error");
    }
    return true;
  }
}


//в каталог
let width = document.documentElement.clientWidth;

if (width <= 707) {
  let categoryLinks = document.querySelectorAll('[data-link="desktop"]');
  if (categoryLinks.length != 0) {
    categoryLinks.forEach((item) => {
      item.setAttribute("data-link", "mobile");
      item.querySelector("span").remove();
      item.remove();
    });
  }
  let container = document.querySelectorAll(".categories-card__container");
  for (let i = 0; i < container.length; i++) {
    if (!container[i].querySelector("a")) container[i].append(categoryLinks[i]);
  }
}

window.addEventListener("resize", () => {
  let width = document.documentElement.clientWidth;
  if (width <= 707) {
    let categoryLinks = document.querySelectorAll('[data-link="desktop"]');
    if (categoryLinks.length != 0) {
      categoryLinks.forEach((item) => {
        item.setAttribute("data-link", "mobile");
        item.querySelector("span").remove();
        item.remove();
      });
    }
    let container = document.querySelectorAll(".categories-card__container");
    for (let i = 0; i < container.length; i++) {
      if (!container[i].querySelector("a"))
        container[i].append(categoryLinks[i]);
    }
  } else {
    let categoryLinks = document.querySelectorAll('[data-link="mobile"]');
    if (categoryLinks.length != 0) {
      categoryLinks.forEach((item) => {
        let span = document.createElement("span");
        span.textContent = "В каталог";
        item.setAttribute("data-link", "desktop");
        item.prepend(span);
        item.remove();
      });
      let container = document.querySelectorAll(".categories-card");

      for (let i = 0; i < container.length; i++) {
        console.log(container[i].querySelector(".categories-card__link"));
        if (!container[i].querySelector(".categories-card__link")) {
          container[i].append(categoryLinks[i]);
        }
      }
    }
  }
});


// инпут
var selector = document.querySelector("#tel");
var im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);
