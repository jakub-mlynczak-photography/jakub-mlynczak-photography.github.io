const htmlRoot = document.querySelector("html");
const toggleButton = document.getElementById("darkmode-toggle");

// Funkcja przełączająca tryb
function toggleDarkMode() {
  const isPressed = toggleButton.getAttribute("aria-pressed") === "true";

  if (isPressed) {
    // Wyłącz tryb ciemny
    htmlRoot.style.colorScheme = "light";
    toggleButton.setAttribute("aria-pressed", "false");
    toggleButton.textContent = "Tryb ciemny";
    sessionStorage.setItem("theme", "light");
  } else {
    // Włącz tryb ciemny
    htmlRoot.style.colorScheme = "dark";
    toggleButton.setAttribute("aria-pressed", "true");
    toggleButton.textContent = "Tryb jasny";
    sessionStorage.setItem("theme", "dark");
  }
}

// Nasłuchiwanie kliknięcia
toggleButton.addEventListener("click", toggleDarkMode);