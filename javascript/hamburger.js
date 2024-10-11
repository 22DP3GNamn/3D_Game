function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    if (navLinks.classList.contains("show")) {
        navLinks.classList.remove("show");
    } else {
        navLinks.classList.add("show");
    }
}

window.addEventListener('resize', function() {
    var navLinks = document.getElementById("navLinks");
    if (window.innerWidth >= 769) {
        navLinks.classList.remove("show"); 
        navLinks.style.display = "flex"; 
    } else {
        navLinks.style.display = "none"; 
    }
});


