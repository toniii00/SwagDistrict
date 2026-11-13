
// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function() {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuBtn.setAttribute("aria-expanded", isOpen);

    menuBtn.textContent = isOpen ? "✕" : "☰";

});

// CLOSE MENU WHEN A LINK IS CLICKED
const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

        menuBtn.textContent = "☰";

        menuBtn.setAttribute("aria-expanded", "false");

    });

});

// PRODUCT ORDER BUTTONS
const orderButtons = document.querySelectorAll(".order-btn");

orderButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const productName = button.dataset.product;

        alert(
            "You selected " + productName +
            ". Please contact SwagDistrict to complete your order."
        );

    });

});

// CONTACT FORM VALIDATION
const contactForm = document.getElementById("contactForm");

const feedback = document.getElementById("formFeedback");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("fullName").value.trim();

    const email = document.getElementById("email").value.trim();

    const subject = document.getElementById("subject").value.trim();

    const message = document.getElementById("message").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "" || email === "" ||
        subject === "" || message === "") {

        feedback.style.color = "red";

        feedback.textContent = "Please fill in all the required fields.";

        return;

    }

    if (!emailPattern.test(email)) {

        feedback.style.color = "red";

        feedback.textContent = "Please enter a valid email address.";

        return;

    }

    feedback.style.color = "#ff6b00";

    feedback.textContent =
        "Your details are valid. No message has been sent.";

    contactForm.reset();

});
