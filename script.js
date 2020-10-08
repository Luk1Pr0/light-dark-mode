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

// Dark mode
function darkMode() {
    nav.style.backgroundColor = "rgb(0 0 0 / 50%)";
    textBox.style.background = "rgb(255 255 255 / 50%)";
    toggleIcon.children[0].textContent = "Dark Mode";
    toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
    imageMode("dark");
}

// Light mode
function lightMode() {
    nav.style.backgroundColor = "rgb(255 255 255 / 50%)";
    textBox.style.background = "rgb(0 0 0 / 50%)";
    toggleIcon.children[0].textContent = "Light Mode";
    toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
    imageMode("light");
}

// Switch theme dynamically
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        darkMode();
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        lightMode();
    }
}

// Event listener
toggleSwitch.addEventListener("change", switchTheme);