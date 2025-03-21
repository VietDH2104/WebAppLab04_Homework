document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const themeIcon = document.getElementById("theme-icon");

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeIcon.src = "img/moon.png";
    } else {
        themeIcon.src = "img/sun.png";
    }

    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeIcon.src = "img/moon.png";
            localStorage.setItem("theme", "dark");
        } else {
            themeIcon.src = "img/sun.png";
            localStorage.setItem("theme", "light");
        }
    });
});


// darkmode for rep-navbar
document.addEventListener("DOMContentLoaded", function () {
    const navbarToggle = document.getElementById("navbar-toggle");
    const navbarMenu = document.getElementById("navbar-menu");

    navbarToggle.addEventListener("click", function () {
        navbarMenu.classList.toggle("active");
    });
});


