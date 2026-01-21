const html = document.documentElement;
const toggle = document.getElementById("themeToggle");
const thumb = document.querySelector(".toggle-thumb");
const startBtn = document.getElementById("startBtn");

const themes = ["dark", "system", "light"];
let currentIndex = 1; // default = system

// Load saved theme
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
    thumb.style.transform = `translateX(${currentIndex * 50}px)`;
}
