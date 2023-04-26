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

// смена картинок

const imgBtn1 = document.querySelector('[data-img="1"]');
const imgBtn2 = document.querySelector('[data-img="2"]');
const imgBtn3 = document.querySelector('[data-img="3"]');
const imgBtn4 = document.querySelector('[data-img="4"]');
const directImg = "image/product/";
const expansion = ".png";
const classNamePrev = "product-content__prev-picture";
const classNameBtnPrev = "product-content__prev-btn";

function findNameImg(btn) {
  let img = btn.querySelector("img");
  let imgName = img.getAttribute("src");
  imgName = imgName.replace(directImg, "");
  imgName = imgName.replace(expansion, "");
  return imgName;
}

function createSource(src, size, parent) {
  let source = document.createElement("source");
  let media = "";
  if (size === "1024") {
    media = "(max-width:1350px) and (min-width:769px)";
  }
  if (size === "768") {
    media = "(max-width:768px) and (min-width:640px)";
  }
  if (size === "320") {
    media = "(max-width:639px)";
  }
  source.setAttribute("srcset", src + "-" + size + expansion);
  source.setAttribute("media", media);
  parent.prepend(source);
}

function changePreviewImg(
  name = "",
  classNamePicture = "",
  classNameContainer = ""
) {
  // удаляем предыдущий тег picture
  document.querySelector("." + classNamePicture).remove();
  const picture = document.createElement("picture");
  picture.classList.add(classNamePicture);
  const img = document.createElement("img");
  img.setAttribute("src", directImg + name + "-prev" + expansion);
  picture.append(img);
  createSource(directImg + name + "-prev", "320", picture);
  createSource(directImg + name + "-prev", "768", picture);
  createSource(directImg + name + "-prev", "1024", picture);
  document.querySelector("." + classNameContainer).append(picture);
}

imgBtn2.addEventListener("click", () => {
  let nameImg = findNameImg(imgBtn2);
  changePreviewImg(nameImg, classNamePrev, classNameBtnPrev);
});
imgBtn1.addEventListener("click", () => {
  let nameImg = findNameImg(imgBtn1);
  changePreviewImg(nameImg, classNamePrev, classNameBtnPrev);
});
imgBtn3.addEventListener("click", () => {
  let nameImg = findNameImg(imgBtn3);
  changePreviewImg(nameImg, classNamePrev, classNameBtnPrev);
});
imgBtn4.addEventListener("click", () => {
  let nameImg = findNameImg(imgBtn4);
  changePreviewImg(nameImg, classNamePrev, classNameBtnPrev);
});

// modal window
document
  .querySelector(".product-content__prev-btn")
  .addEventListener("click", () => {
    new GraphModal().open("first");
    // создание слайдера в модальном окне
    let swiperModal = new Swiper("#swiper-modal", {
      navigation: {
        nextEl: ".modal-content__swiper-button-next",
        prevEl: ".modal-content__swiper-button-prev",
      },
      breakpoints: {
        1350: {
          slidesPerView: "auto",
          spaceBetween: 78,
        },
        1024: {
          slidesPerView: "auto",
          spaceBetween: 60,
        },
        639: {
          slidesPerView: "auto",
          spaceBetween: 60,
        },
        320: {
          slidesPerView: 1,

          spaceBetween: 0,
        },
      },
    });
  });

const imgBtnSwiper1 = document.querySelector('[data-swiper-img="1"]');
const imgBtnSwiper2 = document.querySelector('[data-swiper-img="2"]');
const imgBtnSwiper3 = document.querySelector('[data-swiper-img="3"]');
const imgBtnSwiper4 = document.querySelector('[data-swiper-img="4"]');
const directSwiperImg = "image/product/";
const classNameContainer = "modal-content__prev-container";
const classNameSwiperPicture = "modal-content__prev-picture";
imgBtnSwiper2.addEventListener("click", () => {
  let nameImg = findNameImg(imgBtnSwiper2);
  changePreviewImg(nameImg, classNameSwiperPicture, classNameContainer);
});
imgBtnSwiper1.addEventListener("click", () => {
  let nameImg = findNameImg(imgBtnSwiper1);
  changePreviewImg(nameImg, classNameSwiperPicture, classNameContainer);
});
imgBtnSwiper3.addEventListener("click", () => {
  let nameImg = findNameImg(imgBtnSwiper3);
  changePreviewImg(nameImg, classNameSwiperPicture, classNameContainer);
});
imgBtnSwiper4.addEventListener("click", () => {
  let nameImg = findNameImg(imgBtnSwiper4);
  changePreviewImg(nameImg, classNameSwiperPicture, classNameContainer);
});

const btnBuy = document.querySelector(".product-content__buy-btn");
btnBuy.addEventListener("click", () => {
  new GraphModal().open("second");
});

function validateName() {
  const inputName = document.querySelector('[data-validate-field="name"]');
  const parent = inputName.closest("label");
  let divError = document.createElement("div");
  divError.classList.add("error-massage");
  divError.textContent = "Пожалуйста, введите имя";
  if (inputName.value.trim() === "") {
    inputName.classList.add("product-form__input--error");
    if (!parent.querySelector("div")) {
      parent.append(divError);
    }
    return false;
  } else {
    if (parent.querySelector(".error-massage")) {
      parent.querySelector(".error-massage").remove();
      inputName.classList.remove("product-form__input--error");
    }
    return true;
  }
}

function validatePhone() {
  const inputTel = document.querySelector('[data-validate-field="tel"]');
  const parent = inputTel.closest("label");
  let divError = document.createElement("div");
  divError.classList.add("error-massage");
  divError.textContent = "Пожалуйста, введите телефон";
  if (inputTel.value.trim() === "") {
    inputTel.classList.add("product-form__input--error");
    if (!parent.querySelector("div")) {
      parent.append(divError);
    }
    return false;
  } else {
    if (parent.querySelector(".error-massage")) {
      parent.querySelector(".error-massage").remove();
      inputTel.classList.remove("product-form__input--error");
    }
    return true;
  }
}

document.querySelector(".product-form").addEventListener("submit", (e) => {
  e.preventDefault();
  if (validateName() && validatePhone()) {
    document.querySelector(".modal-open").classList.remove("animate-open");
    document.querySelector(".modal-open").classList.remove("false");
    document.querySelector(".modal-open").classList.remove("modal-open");
    new GraphModal().open("third");
    document.querySelectorAll(".product-form__input").forEach((item) => {
      item.value = "";
    });
  }
});

let swiperSimilarProducts = new Swiper("#swiper-similar-products", {
  navigation: {
    nextEl: ".similar-products__swiper-button-next",
    prevEl: ".similar-products__swiper-button-prev",
  },

  breakpoints: {
    1324: {
      slidesPerView: 4,
      spaceBetween: 32,
    },
    1015: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
    584: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
  },
});

// свайпер для картнок-кнопок

let swiperBtn = new Swiper("#swiper-btn", {
  breakpoints: {
    1015: {
      slidesPerView: "auto",
      spaceBetween: 38,
    },

    639: {
      slidesPerView: "auto",
      spaceBetween: 14,
      direction: "vertical",
    },
    320: {
      slidesPerView: "auto",
      spaceBetween: 38,
    },
  },
});

// input-mask
var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);
