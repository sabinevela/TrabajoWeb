window.addEventListener("scroll", function() {
    let navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "rgba(165, 214, 167, 0.95)"; 
    } else {
        navbar.style.backgroundColor = "rgba(200, 230, 201, 0.9)"; 
    }
});