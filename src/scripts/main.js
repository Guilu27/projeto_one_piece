document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("[data-tab-button]");
  const episodes = document.querySelectorAll("[data-episode]");
  const heroSection = document.querySelector(".hero");

  window.addEventListener("scroll", function () {
    const heroHeight = heroSection.clientHeight;
    const currentPosition = window.scrollY;

    if (currentPosition < heroHeight) {
      hiddenHeaderElements();
    } else {
      showsHeaderElements();
    }
  });

  for (let i = 0; i < episodes.length; i++) {
    episodes[i].addEventListener("click", openOrCloseEpisodeInfo);
  }

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (button) {
      const tabTarget = button.target.dataset.tabButton;
      const tab = document.querySelector(`[data-tab-id=${tabTarget}]`);

      hideAllTabs();

      tab.classList.add("actors__content__tab--is-active");

      const activeButton = document.querySelector(
        `[data-tab-button=${tabTarget}]`
      );
      const navActors = document.querySelector(".actors__content__tabs");

      removeActiveButtonClass();
      removeClassTabs();

      activeButton.classList.add("actors__content__tabs__button--is-active");
      navActors.classList.add(`actors__content__tabs--${tabTarget}`);
    });
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

function hideAllTabs() {
  const tabs = document.querySelectorAll("[data-tab-id]");

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("actors__content__tab--is-active");
  }
}

function removeActiveButtonClass() {
  const buttons = document.querySelectorAll("[data-tab-button]");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("actors__content__tabs__button--is-active");
  }
}

function removeClassTabs() {
  const tabs = ["luffy", "nami", "zoro", "sanji", "usopp"];
  const navActors = document.querySelector(".actors__content__tabs");

  for (let i = 0; i < tabs.length; i++) {
    navActors.classList.remove(`actors__content__tabs--${tabs[i]}`);
  }
}

function openOrCloseEpisodeInfo(episode) {
  const className = "episodes__list__item--is-open";
  const parentElement = episode.target.parentNode;

  parentElement.classList.toggle(className);
}
