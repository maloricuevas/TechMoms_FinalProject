window.onscroll = function () { myFunction() };

var sticky = document.getElementById("sticky");
var navbar = sticky.offsetTop;

function myFunction() {
    if (window.pageYOffset >= navbar) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky")
    }
}