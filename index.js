window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky")
    }
}

const form = document.contactForm

document.addEventListener("submit", function (event) {
    event.preventDefault();
    if (form.name.value == "") {
        alert("You must enter your name before submitting this form");
    }
    else if (form.email.value == "") {
        alert("You must provide your email before submitting this form");
    }
    else if (form.textbox.value == "") {
        alert("You must provide an explanation before submitting this form");
    }
    else if (form.contactType.value === "Other") {
        alert("You must select your response type before submitting this form.");
    }
    else {
        alert("Thank you for your contact! We will contact you with a response shortly.");
    }

})