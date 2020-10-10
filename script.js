// Selected DOM elements
const toggleSwitch = document.querySelector("input[type=checkbox]");
const toggleIcon = document.getElementById("toggle-icon");
const nav = document.getElementById("nav");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

// Dark or light mode image
function imageMode(color) {
    image1.src = `img/${color}-1.svg`;
    image2.src = `img/${color}-2.svg`;
    image3.src = `img/${color}-3.svg`;
}

// Toggle between dark and light theme
function toggleTheme(isDark) {
    nav.style.backgroundColor = isDark ? "rgb(0 0 0 / 50%)" : "rgb(255 255 255 / 50%)";
    textBox.style.background = isDark ? "rgb(255 255 255 / 50%)" : "rgb(0 0 0 / 50%)";
    toggleIcon.children[0].textContent = isDark ? "Dark Mode" : "Light Mode";
    isDark ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon") : toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
    isDark ? imageMode("dark") : imageMode("light");
};

// Switch theme dynamically
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        toggleTheme(true);
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        toggleTheme(false);
    };
};

// Event listener
toggleSwitch.addEventListener("change", switchTheme);

// Check local storage for theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
    if (currentTheme === "dark") {
        toggleSwitch.checked = true;
        toggleTheme(true);
    };
};