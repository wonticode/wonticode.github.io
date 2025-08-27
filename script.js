const darkMode = document.getElementById("dark-mode");
const lightMode = document.getElementById("light-mode");

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
