const darkMode = document.getElementById("dark-mode");
const lightMode = document.getElementById("light-mode");
const aboutBtn = document
  .getElementById("aboutBtn")
  .addEventListener("click", () => {
    document.getElementById("about").className = "container active";
    document.getElementById("project").className = "container";
    document.getElementById("contact").className = "container";
  });
const projectBtn = document
  .getElementById("projectBtn")
  .addEventListener("click", () => {
    document.getElementById("project").className = "container active";
    document.getElementById("contact").className = "container";
    document.getElementById("about").className = "container";
  });

const contactBtn = document
  .getElementById("contactBtn")
  .addEventListener("click", () => {
    document.getElementById("project").className = "container";
    document.getElementById("contact").className = "container active";
    document.getElementById("about").className = "container";
  });

darkMode.addEventListener("click", () => {
  lightMode.style.setProperty("display", "inline-block");
  darkMode.style.setProperty("display", "none");
  document.getElementById("body").className = "darkmode";
});

lightMode.addEventListener("click", () => {
  lightMode.style.setProperty("display", "none");
  darkMode.style.setProperty("display", "inline-block");
  document.getElementById("body").className = " ";
});

const activeContainer = document.querySelector(".container.active");
if (activeContainer) {
  activeContainer.classList.add("show-on-load");
}
