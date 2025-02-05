

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
const hammer = new Hammer(slides)


// Изменения и сохранения языка
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




//Копирования номера телефона

copyButton.addEventListener("click", () => {
  navigator.clipboard
    .writeText("+993 65458698")
    .then(() => alert("Номер телефона скопирован!"))
    .catch((err) => console.error("Ошибка копирования:", err));
});


// Слайд изображения

hammer.get("swipe").set({ direction: Hammer.DIRECTION_HORIZONTAL });

let currentIndex = 0;

function showNextSlide() {
  if (currentIndex < 0) {
    currentIndex = slideCount - 1;
  } else if (currentIndex >= slideCount) {
    currentIndex = 0;
  }

  slides.style.transform = `translateX(-${currentIndex * 100}%)`;

  allImages.forEach((img) => img.classList.remove("isActive"));
  document.querySelector(`.image_list li:nth-child(${currentIndex + 1})`).classList.add("isActive");
}

let autoSlide = setInterval(() => {
  currentIndex = (currentIndex + 1) % slideCount;
  showNextSlide();
}, 4000);

function resetInterval() {
  clearInterval(autoSlide);
  autoSlide = setInterval(() => {
    currentIndex = (currentIndex + 1) % slideCount;
    showNextSlide();
  }, 4000);
}

hammer.on("swiperight", () => {
  currentIndex = (currentIndex + 1) % slideCount;
  showNextSlide();
  resetInterval();
});

hammer.on("swipeleft", () => {
  currentIndex = (currentIndex - 1 + slideCount) % slideCount;
  showNextSlide();
  resetInterval();
});


// Скрытие и анимация при нажатии BurgerMenu

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


// Скрытие не подхядяших языков

const pageLang = document.documentElement.lang;

const elements = document.querySelectorAll("[lang]");

elements.forEach((el) => {
  if (el.lang !== pageLang) {
    el.classList.add("hidden");
  }
});

// Intersection Observer 


document.addEventListener('DOMContentLoaded', () => {
  const upSlide = document.querySelector('.upSlide');
  const upSlideActive = document.querySelector('.upSLideActive');

  
  const observer = new IntersectionObserver((entries , observer) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting) {
        upSlide.classList.remove('hidden')
      }else upSlide.classList.add('hidden')
    })
  }, {threshold: 0.3 , rootMargin: '0px 20px'})
  
  observer.observe(upSlideActive)
});
