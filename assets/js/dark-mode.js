(function () {
  const storageKey = "site-theme";
  const root = document.documentElement;

  function getPreferredTheme() {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved === "dark" || saved === "light") {
        return saved;
      }
    } catch (e) {}

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);

    const button = document.getElementById("theme-toggle");

    if (button) {
      button.textContent = theme === "dark" ? "☀" : "☾";
      button.setAttribute("aria-pressed", theme === "dark");
      button.setAttribute(
        "aria-label",
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      );
    }
  }

  function initialize() {
    applyTheme(getPreferredTheme());

    const button = document.getElementById("theme-toggle");

    if (button) {
      button.addEventListener("click", function () {
        const nextTheme =
          root.getAttribute("data-theme") === "dark" ? "light" : "dark";

        try {
          localStorage.setItem(storageKey, nextTheme);
        } catch (e) {}

        applyTheme(nextTheme);
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize);
  } else {
    initialize();
  }
})();