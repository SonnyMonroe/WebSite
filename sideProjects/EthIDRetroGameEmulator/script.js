import "nes.css/css/nes.min.css";

let dropdownLists = document.querySelectorAll(".nes-dropdown-list");
for (let dropdownList of dropdownLists) {
  dropdownList.style.display = "none";
}

let dropdownToggles = document.querySelectorAll(".nes-btn-group > button");
for (let dropdownToggle of dropdownToggles) {
  let dropdownList = dropdownToggle.nextElementSibling;
  dropdownToggle.addEventListener("click", () => {
    dropdownToggle.setAttribute("aria-expanded", "true");
    dropdownList.style.display = "flex";
  });
}
