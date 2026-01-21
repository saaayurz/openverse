const html = document.documentElement;
const toggle = document.getElementById("themeToggle");
const thumb = document.querySelector(".toggle-thumb");
const startBtn = document.getElementById("startBtn");

/*
  Theme order (as requested):
  0 → light
  1 → dark
  2 → system
*/
const themes = ["light", "dark", "system"];
let currentIndex = 0;

// Load saved preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme && themes.includes(savedTheme)) {
    currentIndex = themes.indexOf(savedTheme);
}

applyTheme();

// Toggle click
toggle.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % themes.length;
    applyTheme();
});

// Button interaction
startBtn.addEventListener("click", () => {
    alert("Welcome to OpenVerse 🚀\nThe journey has officially begun.");
});

function applyTheme() {
    const theme = themes[currentIndex];

    if (theme === "system") {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        html.dataset.theme = prefersDark ? "dark" : "light";
    } else {
        html.dataset.theme = theme;
    }

    localStorage.setItem("theme", theme);
    moveThumb();
}

function moveThumb() {
    // 0 = light, 1 = dark, 2 = system
    thumb.style.transform = `translateX(${currentIndex * 45}px)`;
}
