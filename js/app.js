const nav = document.getElementById('navbar');

function showNav() {
    var scroll = window.scrollY;
    if (scroll !== 0) {
        nav.style.backgroundColor = "#0a131d";
        nav.style.boxShadow = "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px";
    }
    else {
        nav.style.backgroundColor = "transparent";
        nav.style.transition = "500ms ease"
        nav.style.boxShadow = "none";
    }
}

//change theme;
const toggler = document.getElementById('themeTogglerBtn');
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

// mobile menu opening 
function toggleMenu() {
    document.getElementById('mobileMenuPage').style.transform = "translateY(0)";
    document.getElementById('mobileMenuPage').style.transition = "all 400ms ease-out"
}
function closeMenu() {
    document.getElementById('mobileMenuPage').style.transform = "translateY(-100vh)";
    document.getElementById('mobileMenuPage').style.transition = "400ms ease-out"
}


//day showing functionality
const today = new Date();
const dayFinal = today.getDay();
const dayList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]
document.getElementById('welcomeHeading').innerHTML = `Welcome to the official page of,
<div id="welHead">Students' chapter CSE</div>
Have a great ${dayList[dayFinal]}! ^^ `;


//data fetch api using json
fetch("./news.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log(err);
    })
function appendData(data) {
    document.getElementById("NewsCards").innerHTML = `
            ${data.map(function (news) {
        return `<div class="newsCard" style="
                    background-image:url('${news.imageLink}');
                    background-size:cover;
                    background-position:center;">
                        <div class ="CardBottomContent">
                            <div class="cardHeading">
                            ${news.Heading}
                            </div>
                            <div class="cardContent">
                            ${news.content}
                            </div>
                            <div class="cardDate">
                            ${news.date}
                            </div>
                         </div>


                </div>


                `
    }).join('')}  
            `
}