function toggleMenu() {
    const nav = document.getElementById("navLinks");

    if (nav) {
        nav.classList.toggle("active");
    }
}

document.addEventListener("DOMContentLoaded", function () {

    const countdownEl = document.getElementById("countdown");

    if (!countdownEl) return;

    let timeLeft = 5;

    const timer = setInterval(() => {

        timeLeft--;

        countdownEl.textContent = timeLeft;

        if (timeLeft <= 0) {

            clearInterval(timer);

            // Frontend homepage
            window.location.replace(
                "http://localhost:5500/Frontend/index.html"
            );
        }

    }, 1000);
});