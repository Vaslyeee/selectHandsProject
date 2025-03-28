const srcImgHeader = {
  handMeet: {
    src: "./img/handMeet.png",
    alt: "HandMeet",
  },
  handBones: {
    src: "./img/handBones.png",
    alt: "HandBones",
  },
};

const srcImageMainHands = [
  {
    type: "handMeetMain",
    src: "./img/imgHandsMain/handMeetMain.png",
    alt: "HandMeetMain",
    srcBack: "./img/imgHandsMain/BackgroundHandFirst.png",
    classBack: "backgroundfirst",
    titleText: "Резиновая-рука",
    classText: "title__text-first",
    mainTextF:
      "Гибкий материал, который защищает от внешнего давления. Внутри встроены датчики для измерения температуры.",
    mainTextS: "Подойдет целеустремленным и любопытным.",
    classMainText: "text__main-first",
  },
  {
    type: "handGlassMain",
    src: "./img/imgHandsMain/handGlassMain.png",
    alt: "HandGlassMain",
    srcBack: "./img/imgHandsMain/BackgroundHandSecond.png",
    classBack: "backgroundsecond",
    titleText: "Стеклянная рука",
    classText: "title__text-second",
    mainTextF:
      "Рука обладает интегрированными сенсорами, которые передают тактильную информацию в нервные окончания.",
    mainTextS:
      "Подойдет для утонченной натуры, которая стремится к уникальной эстетике.",
    classMainText: "text__main-second",
  },
  {
    type: "handSteelmain",
    src: "./img/imgHandsMain/handSteelMain.png",
    alt: "HandSteelMain",
    srcBack: "./img/imgHandsMain/BackgroundHandThird.png",
    classBack: "backgroundthird",
    titleText: "Механическая рука",
    classText: "title__text-third",
    mainTextF:
      "Рука изготовлена из высокопрочной стали. Внутри встроен нож, отвертка и фонарик. Перенесет любые удары и повреждения.",
    mainTextS: "Подойдет для надежных и смелых.",
    classMainText: "text__main-third",
  },
];

const srcImageMainPotions = [
  {
    type: "potionRed",
    src: "./img/potionMain/potionRed.png",
    alt: "potionRed",
  },
  {
    type: "potionBlue",
    src: "./img/potionMain/potionBlue.png",
    alt: "potionBlue",
  },
  {
    type: "potionPink",
    src: "./img/potionMain/potionPink.png",
    alt: "potionPink",
  },
  {
    type: "potionGreen",
    src: "./img/potionMain/potionGreen.png",
    alt: "potionGreen",
  },
];

const pageHedaerText = {
  firstTextAlterOne: "Забудьте абсолютно все",
  firstTextAlterTwo: "и погрузитесь в мир регенерации",
  firstTextOne: "хххххххх ххххххххх ххх",
  firstTextTwo: "х ххххххххххх х ххх ххххххххххх",
  secondTextAlterOne: "Восстановите часть тела,",
  secondTextAlterTwo: "разрушив все границы",
  secondTextAlterThree: "и стереотипы",
  secondTextOne: "ххххххххххх ххххх хххх",
  secondTextTwo: "хххххххх ххх ххххххх",
  secondTextThree: "х хххххххххх",
  thirdTextAlter: "Именно сейчас все в ваших руках",
  thirdTextAlterOne: "Именно сейчас",
  thirdTextAlterTwo: "все в ваших руках",
  thirdTextOne: "хххххх хххххх",
  thirdTextTwo: "ххх х ххххх ххххх",
};

// Переменная всей старницы
const page = document.querySelector(".page");

const headerButton = page.querySelector(".header__button-hand");
const headerFirstText = page.querySelector(".header__first-text");
const headerSecondText = page.querySelector(".header__second-text");
const headerThirdText = page.querySelector(".header__third-text");
const headerButtonImg = headerButton.querySelector(
  ".header__button-hand-image"
);
const headerButtonText = page.querySelector(".header__button__text");
const contentMakeChoice = page
  .querySelector(".section__make-choice")
  .querySelector(".content__wrapper");
const potionList = page.querySelector(".potion__list");
const lizardList = page.querySelector(".lizard__list");
const selectedPotionImage = page.querySelector(".selected__potion-image");

const contentMakeChoiceTemlate =
  page.querySelector("#button__template").content;
const contentYourChoiceTemlate = page.querySelector("#button__potion").content;
const contentTakeTemplate = page.querySelector("#lizard").content;

// Устанавливаем изображение кнопки руки при первоначальной загрузке и текст
headerButtonImg.src = srcImgHeader.handMeet.src;
headerButtonImg.alt = srcImgHeader.handMeet.alt;
headerFirstText.querySelector(".header__first-text-1").textContent =
  pageHedaerText.firstTextOne;
headerFirstText.querySelector(".header__first-text-2").textContent =
  pageHedaerText.firstTextTwo;
headerSecondText.querySelector(".header__second-text-1").textContent =
  pageHedaerText.secondTextOne;
headerSecondText.querySelector(".header__second-text-2").textContent =
  pageHedaerText.secondTextTwo;
headerSecondText.querySelector(".header__second-text-3").textContent =
  pageHedaerText.secondTextThree;
headerThirdText.querySelector(".header__third-text-1").textContent =
  pageHedaerText.thirdTextOne;
headerThirdText.querySelector(".header__third-text-2").textContent =
  pageHedaerText.thirdTextTwo;

//Вешаем событие на кнопку
headerButton.addEventListener("click", swapHand);

//описываем логику события
function swapHand(event) {
  event.preventDefault();
  if (headerButtonImg.alt === srcImgHeader.handMeet.alt) {
    headerButtonImg.src = srcImgHeader.handBones.src;
    headerButtonImg.alt = srcImgHeader.handBones.alt;
    headerButtonText.classList.add("header__button__text-alter");
    headerFirstText.querySelector(".header__first-text-1").textContent =
      pageHedaerText.firstTextAlterOne;
    headerFirstText.querySelector(".header__first-text-2").textContent =
      pageHedaerText.firstTextAlterTwo;
    headerSecondText.querySelector(".header__second-text-1").textContent =
      pageHedaerText.secondTextAlterOne;
    headerSecondText.querySelector(".header__second-text-2").textContent =
      pageHedaerText.secondTextAlterTwo;
    headerSecondText.querySelector(".header__second-text-3").textContent =
      pageHedaerText.secondTextAlterThree;
    headerThirdText.querySelector(".header__third-text-1").textContent =
      pageHedaerText.thirdTextAlterOne;
    headerThirdText.querySelector(".header__third-text-2").textContent =
      pageHedaerText.thirdTextAlterTwo;
  } else {
    headerButtonImg.src = srcImgHeader.handMeet.src;
    headerButtonImg.alt = srcImgHeader.handMeet.alt;
    headerButtonText.classList.remove("header__button__text-alter");
    headerFirstText.querySelector(".header__first-text-1").textContent =
      pageHedaerText.firstTextOne;
    headerFirstText.querySelector(".header__first-text-2").textContent =
      pageHedaerText.firstTextTwo;
    headerSecondText.querySelector(".header__second-text-1").textContent =
      pageHedaerText.secondTextOne;
    headerSecondText.querySelector(".header__second-text-2").textContent =
      pageHedaerText.secondTextTwo;
    headerSecondText.querySelector(".header__second-text-3").textContent =
      pageHedaerText.secondTextThree;
    headerThirdText.querySelector(".header__third-text-1").textContent =
      pageHedaerText.thirdTextOne;
    headerThirdText.querySelector(".header__third-text-2").textContent =
      pageHedaerText.thirdTextTwo;
  }
}

//Добавляем руки кнопки на страницу
srcImageMainHands.forEach((element) => {
  const makeChoiceElement = contentMakeChoiceTemlate
    .querySelector(".button-hands")
    .cloneNode(true);
  makeChoiceElement.addEventListener("click", clickTry);
  makeChoiceElement.querySelector(".button-image").src = element.src;
  makeChoiceElement.querySelector(".button-image").alt = element.alt;
  makeChoiceElement.querySelector(".button-image").id = element.type;
  makeChoiceElement.querySelector(".Background_Hands").src = element.srcBack;
  makeChoiceElement
    .querySelector(".Background_Hands")
    .classList.add(element.classBack);
  makeChoiceElement.querySelector(".button-hands-text").textContent =
    element.titleText;
  makeChoiceElement
    .querySelector(".button-hands-text")
    .classList.add(element.classText);
  makeChoiceElement
    .querySelector(".button-main-text")
    .querySelector(".button-main-fpar").textContent = element.mainTextF;
  makeChoiceElement
    .querySelector(".button-main-text")
    .querySelector(".button-main-spar").textContent = element.mainTextS;
  makeChoiceElement
    .querySelector(".button-main-text")
    .classList.add(element.classMainText);
  contentMakeChoice.append(makeChoiceElement);
});

//тут логика рук
function selectHand(event) {
  return null;
}

let currentPotionSrc = null;

document.addEventListener("DOMContentLoaded", function () {
  const hands = document.querySelectorAll(".button-image"); // Все изображения рук

  hands.forEach((hand) => {
    hand.addEventListener("click", function () {
      const currentButton = hand.closest(".button-hands");
      const currentBackground =
        currentButton.querySelector(".Background_Hands");

      const currentTitleText =
        currentButton.querySelector(".button-hands-text");
      const currentMainText = currentButton.querySelector(".button-main-text");

      const isSelected = hand.classList.contains("selected");

      // Сброс всех рук и всех фонов
      document.querySelectorAll(".button-image").forEach((otherHand) => {
        otherHand.classList.remove("selected", "deselected");
      });

      document.querySelectorAll(".Background_Hands").forEach((bg) => {
        bg.classList.remove("visible");
      });

      document.querySelectorAll(".button-hands-text").forEach((bg) => {
        bg.classList.remove("visible");
      });

      document.querySelectorAll(".button-main-text").forEach((bg) => {
        bg.classList.remove("visible");
      });

      if (!isSelected) {
        // Активируем текущую руку и фон
        hand.classList.add("selected");
        document.querySelectorAll(".button-image").forEach((otherHand) => {
          if (otherHand !== hand) {
            otherHand.classList.add("deselected");
          }
        });
        currentBackground.classList.add("visible");
        currentTitleText.classList.add("visible");
        currentMainText.classList.add("visible");
      }
    });
  });
});

// Добавляем потки на страницу
srcImageMainPotions.forEach((element) => {
  const contentsYourChoice = contentYourChoiceTemlate
    .querySelector(".potion__element")
    .cloneNode(true);

  const imageButton = contentsYourChoice.querySelector(".potion__button-image");
  imageButton.src = element.src;
  imageButton.alt = element.alt;
  imageButton.id = element.type;

  contentsYourChoice.addEventListener("click", selectPotion);
  potionList.append(contentsYourChoice);
});

// Логика выбора / отмены выбора потки
function selectPotion(event) {
  event.preventDefault();

  const clickedSrc = event.target.src;
  const perColor = event.target.id;
  const backgoundPotion = page.querySelector(".section__your-choice");

  if (perColor === "potionBlue") {
    console.log("potionBlue");
    backgoundPotion.style.backgroundImage =
      "url('./img/backgroundFlasks/BackgroundBlue.png')";
  } else if (perColor === "potionPink") {
    console.log("potionPink");
    backgoundPotion.style.backgroundImage =
      "url('./img/backgroundFlasks/BackgroundPink.png')";
  } else if (perColor === "potionGreen") {
    console.log("potionGreen");
    backgoundPotion.style.backgroundImage =
      "url('./img/backgroundFlasks/BackgroundGreen.png')";
  } else if (perColor === "potionRed") {
    console.log("potionRed");
    backgoundPotion.style.backgroundImage =
      "url('./img/backgroundFlasks/BackgroundRad.png')";
  }

  if (clickedSrc === currentPotionSrc) {
    // Повторный клик — отмена выбора
    selectedPotionImage.src = "";
    selectedPotionImage.alt = "";
    currentPotionSrc = null;
    backgoundPotion.style.backgroundImage =
      "url('./img/backgroundMainThree.png')";
  } else {
    // Новый выбор
    selectedPotionImage.src = clickedSrc;
    selectedPotionImage.alt = event.target.alt;
    currentPotionSrc = clickedSrc;
  }
}

function clickTry(event) {
  console.log(event.target);
}

//Добавляем ящериц
for (let i = 0; i < 15; i++) {
  const contentTakes = contentTakeTemplate
    .querySelector(".lizard__element")
    .cloneNode(true);
  contentTakes.querySelector(".lizard__image").src = `./img/lizards/${[
    i,
  ]}_lizard.png`;
  lizardList.append(contentTakes);
}

//тут логика ящериц
function selectHand(event) {
  return null;
}

const lizardElements = document.querySelectorAll(".lizard__element");

// Функция для обработки наведения на элемент
function handleMouseEnter(event) {
  const element = event.currentTarget;
  const image = element.querySelector(".lizard__image");

  const randomX = Math.random() * 200 - 100;
  const randomY = Math.random() * 200 - 100;

  image.style.transition = "transform 0.2s ease";
  image.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

function handleMouseLeave(event) {
  const element = event.currentTarget;
  const image = element.querySelector(".lizard__image");

  image.style.transition = "transform 0.2s ease";
  image.style.transform = "translate(0, 0)";
}

lizardElements.forEach((element) => {
  element.addEventListener("mouseenter", handleMouseEnter);
  element.addEventListener("mouseleave", handleMouseLeave);
});
