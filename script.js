const allImages = document.querySelectorAll(".image_list li");
const slides = document.querySelector(".slides");
const slideItems = document.querySelectorAll(".slide");
const slideCount = slideItems.length;
const navList = document.querySelector(".navList");
const burgerMenu = document.querySelector(".burgerMenu");
const copyButton = document.querySelector(".copyButton");
const menuList = document.querySelector('.menuList')
const englishBtn = document.querySelector('#english')
const russiaBtn = document.querySelector('#russia')
const englishBtnPC = document.querySelector('#englishPC')
const russiaBtnPC = document.querySelector('#russiaPC')
const html = document.querySelector('html')

let language = sessionStorage.getItem('lang') ?? 'en'

html.lang = language



englishBtn.addEventListener('click' , () => {
  html.lang = 'en'
  sessionStorage.setItem('lang' , 'en')
  location.reload()
})

russiaBtn.addEventListener('click' , () => {
  html.lang = 'ru'
  sessionStorage.setItem('lang' , 'ru')
  location.reload()
})

englishBtnPC.addEventListener('click' , () => {
  html.lang = 'en'
  sessionStorage.setItem('lang' , 'en')
  location.reload()
})

russiaBtnPC.addEventListener('click' , () => {
  html.lang = 'ru'
  sessionStorage.setItem('lang' , 'ru')
  location.reload()
})


if(html.lang === 'en'){
  englishBtn.classList.add('isActiveLanguageBtn')
  englishBtnPC.classList.add('isActiveLanguageBtn')
}else {
  russiaBtn.classList.add('isActiveLanguageBtn')
  russiaBtnPC.classList.add('isActiveLanguageBtn')
}

copyButton.addEventListener("click", () => {
  navigator.clipboard
    .writeText("+993 65458698")
    .then(() => alert("Номер телефона скопирован!"))
    .catch((err) => console.error("Ошибка копирования:", err));
});

let currentIndex = 0;

function showNextSlide() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;

  allImages.forEach((img) => img.classList.remove("isActive"));

  const image = document.querySelector(
    `.image_list li:nth-child(${currentIndex + 1})`
  );
  image.classList.add("isActive");
}

allImages.forEach((dot, index) => {
  dot.addEventListener("click", () => goToSlide(index));
});

function goToSlide(index) {
  currentIndex = index;
  showNextSlide();
}

setInterval(() => {
  currentIndex = (currentIndex + 1) % slideCount;
  showNextSlide();
}, 4000);

let activeBurger = false;



function toggleBurgerMenu() {
  activeBurger = !activeBurger
  if(activeBurger){
    burgerMenu.classList.add('activeBurger')
    menuList.classList.remove('hidden')
  }else {
    menuList.classList.add('hidden')
    burgerMenu.classList.remove('activeBurger')
  }
}

burgerMenu.addEventListener('click' , () => {
  toggleBurgerMenu()
})

if (Number(document.documentElement.clientWidth) < 1000) {
  navList.classList.add("hidden");
  burgerMenu.classList.remove("hidden");
} else {
  burgerMenu.classList.add("hidden");
  navList.classList.remove("hidden");
}




const pageLang = document.documentElement.lang;

const elements = document.querySelectorAll("[lang]");

elements.forEach((el) => {
  if (el.lang !== pageLang) {
    el.classList.add("hidden");
  }
});