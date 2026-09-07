/* WhatsApp Order Form */

const orderForm = document.getElementById("orderForm");

if (orderForm) {

    orderForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const service = document.getElementById("service").value;
        const requirements = document.getElementById("requirements").value;

        const message =
            "Hello Student Help Hub!%0A%0A" +
            "Name: " + encodeURIComponent(name) + "%0A" +
            "Email: " + encodeURIComponent(email) + "%0A" +
            "Service: " + encodeURIComponent(service) + "%0A" +
            "Requirements: " + encodeURIComponent(requirements);

        const whatsappNumber = "918180811565";

        const whatsappURL =
            "https://wa.me/" + whatsappNumber + "?text=" + message;

        window.open(whatsappURL, "_blank");

    });

}


/* Mobile Menu */

function toggleMenu() {

    const navLinks = document.querySelector(".nav-links");

    navLinks.classList.toggle("active");

}
