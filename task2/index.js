const mainMenuElements = document.querySelectorAll(".menu-item");
const mainMenuLabels = document.querySelectorAll(".menu-label");
mainMenuElements.forEach((menuElement, _) => {
  const menuLabel = menuElement.querySelector(".menu-label");
  if (menuLabel === null) {
    return;
  }
  menuLabel.addEventListener("click", () => {
    console.log("clicked menu element");
    var wasInactive = !menuLabel.classList.contains("active");
    mainMenuLabels.forEach((label, _) => {
      label.classList.remove("active");
    });
    if (wasInactive) {
      menuLabel.classList.add("active");
      const sidelistLabels = menuElement.querySelectorAll(".sidelist-label");
      if (sidelistLabels.length === 0) {
        return;
      }
      // to achieve the original behavior (couldn't do this in html/css only ver)
      sidelistLabels.forEach((sidelistLabel, _) => {
        sidelistLabel.classList.remove("active");
      });
      sidelistLabels[0].classList.add("active");
    }
  });

  const sidelistLabels = menuElement.querySelectorAll(".sidelist-label");
  if (sidelistLabels.length === 0) {
    return;
  }
  sidelistLabels[0].classList.add("active");
  sidelistLabels.forEach((sidelistLabel, currentSidelistIndex) => {
    sidelistLabel.addEventListener("click", () => {
      if (sidelistLabel.classList.contains("active")) {
        return;
      }
      sidelistLabel.classList.add("active");
      sidelistLabels.forEach((label, i) => {
        if (i !== currentSidelistIndex) {
          label.classList.remove("active");
        }
      });
    });
  });
});

document.addEventListener("click", (ev) => {
  const activeMenuLabel = document.querySelector(".menu-label.active");
  if (activeMenuLabel === null) {
    return;
  }
  const menu = document.querySelector(".menu");
  const submenu = activeMenuLabel.parentElement.querySelector(".submenu");
  if (!menu.contains(ev.target) && !submenu.contains(ev.target)) {
    activeMenuLabel.classList.remove("active");
  }
});

const hamburgerButton = document.querySelector(".hamburger-menu-button");
hamburgerButton.addEventListener("click", () => {
  hamburgerButton.classList.toggle("active");
});

const mobileMenuLabels = document.querySelectorAll(".mobile-menu-label");
mobileMenuLabels.forEach((elem, index) => {
  elem.addEventListener("click", () => {
    elem.classList.toggle("active");
    if (!elem.classList.contains("active")) {
      const sublist = elem.parentElement.querySelector(".outer-sublist");
      if (sublist === null) {
        return;
      }
      const innerLabels = sublist.querySelectorAll(".mobile-menu-label");
      innerLabels.forEach((inner, _) => inner.classList.remove("active"));
    }
  });
});
