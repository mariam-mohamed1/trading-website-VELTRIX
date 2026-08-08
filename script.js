// ============================
// MOBILE MENU
// ============================

function toggleMenu() {

    const nav = document.querySelector(".navbar nav");

    if (nav.style.display === "flex") {

        nav.style.display = "none";

    } else {

        nav.style.display = "flex";

        nav.style.position = "absolute";
        nav.style.top = "75px";
        nav.style.left = "0";
        nav.style.width = "100%";

        nav.style.padding = "25px";

        nav.style.flexDirection = "column";

        nav.style.background = "#080a09";
    }
}


// ============================
// SCROLL TO SECTION
// ============================

function scrollToSection(id) {

    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });

}


// ============================
// JOIN COMMUNITY
// ============================

function joinCommunity() {

    // Replace this with the real Telegram / WhatsApp link

    const telegramLink = "https://t.me/yourusername";

    window.open(telegramLink, "_blank");

}


// ============================
// SIMULATED PRICE UPDATE
// ============================

let price = 1.08542;

const priceElement = document.getElementById("price");
const changeElement = document.getElementById("change");

setInterval(() => {

    const movement =
        (Math.random() - 0.5) * 0.0005;

    price += movement;

    priceElement.textContent =
        price.toFixed(5);

    const percentage =
        ((price - 1.08542) / 1.08542) * 100;

    if (percentage >= 0) {

        changeElement.textContent =
            "+" + percentage.toFixed(2) + "%";

        changeElement.style.color =
            "#65ff9a";

    } else {

        changeElement.textContent =
            percentage.toFixed(2) + "%";

        changeElement.style.color =
            "#ff6872";

    }

}, 2000);


// ============================
// NAVBAR SCROLL EFFECT
// ============================

window.addEventListener("scroll", () => {

    const navbar =
        document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(5,7,6,0.96)";

    } else {

        navbar.style.background =
            "rgba(5,7,6,0.8)";

    }

});