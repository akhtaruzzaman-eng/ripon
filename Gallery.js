
// ========================================
// Gallery Dark / Light Theme Toggle
// ========================================

document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");

    if (!themeToggle) {
        console.error("Theme toggle button not found!");
        return;
    }

    const themeIcon = themeToggle.querySelector("i");

    function applyTheme(theme) {
        const isLight = theme === "light";

        document.body.classList.toggle("light-mode", isLight);

        if (themeIcon) {
            themeIcon.classList.toggle("fa-sun", isLight);
            themeIcon.classList.toggle("fa-moon", !isLight);
        }

        themeToggle.setAttribute(
            "aria-label",
            isLight ? "Switch to dark mode" : "Switch to light mode"
        );
    }

    // Load saved theme
    let savedTheme = "dark";

    try {
        savedTheme = localStorage.getItem("gallery-theme") || "dark";
    } catch (error) {
        console.warn("Unable to load saved theme.");
    }

    applyTheme(savedTheme);

    // Toggle theme
    themeToggle.addEventListener("click", function () {
        const isLight = document.body.classList.contains("light-mode");
        const newTheme = isLight ? "dark" : "light";

        applyTheme(newTheme);

        try {
            localStorage.setItem("gallery-theme", newTheme);
        } catch (error) {
            console.warn("Unable to save theme.");
        }
    });
});
