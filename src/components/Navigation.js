export default class Navigation {
  constructor() {
    this.toggleBtn = document.querySelector(".navbar__toggle-button");
    this.burger = document.querySelector(".navbar__burger");
    this.navList = document.querySelector(".navbar__list");
    this.navLinks = [...document.querySelectorAll(".navbar__link")]; // spread nodeList to array
    this.tabPort = window.matchMedia("(max-width: 56.25em)");
    this.navExpanded = false;
    this.events();
  }
  events() {
    this.toggleBtn.addEventListener("click", this.toggleNav.bind(this));
    this.tabPort.addListener(this.respondToMediaQuery(this.tabPort));
    window.addEventListener("resize", () =>
      this.respondToMediaQuery(this.tabPort)
    );
  }
  respondToMediaQuery(query) {
    if (query.matches) {
      if (!this.navExpanded) {
        this.closeNav();
      } else {
        this.openNav();
      }
    } else {
      this.openNav();
    }
  }
  toggleNav() {
    if (this.navList.style.maxHeight) {
      this.navExpanded = false;
      this.closeNav();
    } else {
      this.navExpanded = true;
      this.openNav();
    }
  }
  openNav() {
    this.navList.setAttribute("aria-hidden", "false");
    this.burger.classList.add("navbar__burger--active");
    this.toggleBtn.classList.add("navbar__toggle-button--active");
    this.navList.style.maxHeight = `${this.navList.scrollHeight}px`;
    this.navLinks.forEach(item => item.setAttribute("tabindex", "0"));
  }
  closeNav() {
    this.navList.setAttribute("aria-hidden", "true");
    this.burger.classList.remove("navbar__burger--active");
    this.toggleBtn.classList.remove("navbar__toggle-button--active");
    this.navList.style.maxHeight = null;
    this.navLinks.forEach(item => item.setAttribute("tabindex", "-1"));
  }
}
