var typed = new Typed("#typed", {
  stringsElement: "#typed-strings",
  smartBackspace: true,
  loop: true,
  loopCount: Infinity,
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 250,
  startDelay: 250,
  cursorChar: "|",
});

// Theme toggle logic
const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;
const darkTheme = {
  "--color-bg": "#0b0f1a",
  "--color-surface": "#111827",
  "--color-text": "#f9fafb",
  "--color-text-secondary": "#9ca3af",
  "--color-accent": "#06D001",
  "--color-accent-hover": "#059212",
  "--color-border": "#1f2937",
  "--color-success": "#22c55e",
  "--color-warning": "#f59e0b",
  "--color-error": "#ef4444",
};
const lightTheme = {
  "--color-bg": "#f9fafb",
  "--color-surface": "#ffffff",
  "--color-text": "#1f2937",
  "--color-text-secondary": "#6b7280",
  "--color-accent": "#a7d8f0",
  "--color-accent-hover": "#5ca9d6",
  "--color-border": "#e5e7eb",
  "--color-success": "#6ee7b7",
  "--color-warning": "#fcd34d",
  "--color-error": "#f87171",
};

function setTheme(theme) {
  Object.entries(theme).forEach(([k, v]) => root.style.setProperty(k, v));
}

function getCurrentTheme() {
  return localStorage.getItem("theme") || "dark";
}

function applyTheme(themeName) {
  if (themeName === "dark") setTheme(darkTheme);
  else setTheme(lightTheme);
  localStorage.setItem("theme", themeName);
}

themeToggle.addEventListener("click", () => {
  const newTheme = getCurrentTheme() === "dark" ? "light" : "dark";
  applyTheme(newTheme);
});

// Initialize theme on load
applyTheme(getCurrentTheme());

particlesJS.load("particles-js", "assets/particles.json", function () {
  console.log("callback - particles.js config loaded");
});

const toggleBtn = document.getElementById("theme-toggle");
const thumb = document.getElementById("theme-thumb");
const sun = document.getElementById("theme-icon");
const moon = document.getElementById("theme-icon-dark");

let dark = false;

toggleBtn.addEventListener("click", () => {
  dark = !dark;

  if (dark) {
    thumb.classList.add("translate-x-7");
    sun.classList.add("opacity-0");
    moon.classList.remove("opacity-0");
    document.documentElement.classList.add("dark"); // kalau pakai dark mode Tailwind
  } else {
    thumb.classList.remove("translate-x-7");
    sun.classList.remove("opacity-0");
    moon.classList.add("opacity-0");
    document.documentElement.classList.remove("dark");
  }
});