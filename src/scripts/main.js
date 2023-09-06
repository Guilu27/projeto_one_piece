document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("[data-tab-button]");
  const questions = document.querySelectorAll("[data-faq-question]");

  const heroSection = document.querySelector(".hero");
  const heroHeight = heroSection.clientHeight;

  window.addEventListener("scroll", function () {
    const currentPosition = window.scrollY;

    if (currentPosition < heroHeight) {
      hiddenHeaderElements();
    } else {
      showsHeaderElements();
    }
  });

  // Tabs de programacoes
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (button) {
      const tabTarget = button.target.dataset.tabButton;
      const tab = document.querySelector(`[data-tab-id=${tabTarget}]`);
      hideAllTabs();
      activeButtonRemove();
      tab.classList.add("shows__list--is-active");
      button.target.classList.add("shows__tabs__button--is-active");
    });
  }

  // Accordion secao FAQ
  for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", openOrCloseQuestion);
  }
});

function hiddenHeaderElements() {
  const header = document.querySelector("header");
  header.classList.add("header--is-hidden");
}

function showsHeaderElements() {
  const header = document.querySelector("header");
  header.classList.remove("header--is-hidden");
}

function openOrCloseQuestion(e) {
  const className = "faq__questions__item--is-open";
  const parentElement = e.target.parentNode;

  parentElement.classList.toggle(className);
}

function activeButtonRemove() {
  const buttons = document.querySelectorAll("[data-tab-button]");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("shows__tabs__button--is-active");
  }
}

function hideAllTabs() {
  const tabsContainer = document.querySelectorAll("[data-tab-id]");
  for (let i = 0; i < tabsContainer.length; i++) {
    tabsContainer[i].classList.remove("shows__list--is-active");
  }
}
