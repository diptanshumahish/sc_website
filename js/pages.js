//change theme;
const toggler = document.getElementById('themeTogglerBtn');
const lapToggler =document.getElementById('themeTogglerBtnLap');
const theme = window.localStorage.getItem("theme");
if (theme == "dark") {
    document.body.classList.add("dark");
}
toggler.addEventListener('click', function () {
    document.body.classList.toggle("dark");
    if (theme == "dark") {
        window.localStorage.setItem("theme", "light");
    } else {
        window.localStorage.setItem("theme", "dark")
    }
})
lapToggler.addEventListener('click', function () {
    document.body.classList.toggle("dark");
    if (theme == "dark") {
        window.localStorage.setItem("theme", "light");
    } else {
        window.localStorage.setItem("theme", "dark")
    }
})


// mobile menu opening 
function toggleMenu() {
    document.getElementById('mobileMenuPage').style.transform = "translateY(0)";
    document.getElementById('mobileMenuPage').style.transition = "all 400ms ease-out"
}
function closeMenu() {
    document.getElementById('mobileMenuPage').style.transform = "translateY(-100vh)";
    document.getElementById('mobileMenuPage').style.transition = "400ms ease-out"
}