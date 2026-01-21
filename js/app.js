const html = document.documentElement;
const toggle = document.getElementById("themeToggle");
const thumb = document.querySelector(".toggle-thumb");

const themes = ["light", "dark", "system"];
let index = 0;

const saved = localStorage.getItem("theme");
if (saved && themes.includes(saved)) index = themes.indexOf(saved);

applyTheme();

toggle.addEventListener("click", () => {
    index = (index + 1) % themes.length;
    applyTheme();
});

function applyTheme() {
    const theme = themes[index];

    if (theme === "system") {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        html.dataset.theme = prefersDark ? "dark" : "light";
    } else {
        html.dataset.theme = theme;
    }

    localStorage.setItem("theme", theme);
    thumb.style.transform = `translateX(${index * 40}px)`;
}
