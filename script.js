/* =========================================
   GREENGUARD
   JAVASCRIPT
========================================= */

// Wait until the page is loaded
document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       SCROLL REVEAL ANIMATION
    ===================================== */

    const revealElements = document.querySelectorAll(
        ".section-heading, .about-grid, .eco-card, .action-box, .final-message, .stat"
    );

    revealElements.forEach(element => {
        element.style.opacity = "0";
        element.style.transform = "translateY(35px)";
        element.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    });

    const revealOnScroll = () => {

        revealElements.forEach(element => {

            const position = element.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (position < screenHeight - 80) {
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
            }

        });

    };

    window.addEventListener("scroll", revealOnScroll);

    revealOnScroll();


    /* =====================================
       NAVBAR SCROLL EFFECT
    ===================================== */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            navbar.style.background = "rgba(2, 15, 8, 0.94)";
        } else {
            navbar.style.background = "rgba(4, 20, 12, 0.72)";
        }

    });


    /* =====================================
       SMOOTH NAVIGATION
    ===================================== */

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", function(event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =====================================
       CARD MOUSE EFFECT
    ===================================== */

    const cards = document.querySelectorAll(".eco-card");

    cards.forEach(card => {

        card.addEventListener("mousemove", event => {

            const rect = card.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const rotateX = ((y / rect.height) - 0.5) * -5;
            const rotateY = ((x / rect.width) - 0.5) * 5;

            card.style.transform =
                `translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "translateY(0) rotateX(0) rotateY(0)";

        });

    });


    /* =====================================
       YEAR AUTOMATICALLY UPDATES
    ===================================== */

    const copyright = document.querySelector(".copyright");

    if (copyright) {

        const year = new Date().getFullYear();

        copyright.innerHTML =
            `© ${year} GreenGuard • Save Our Environment 🌍`;

    }


    /* =====================================
       CONSOLE MESSAGE
    ===================================== */

    console.log(
        "🌱 GreenGuard loaded successfully. Protect our planet!"
    );

});