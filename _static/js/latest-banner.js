/*
 * Relabel the pydata-sphinx-theme "version warning" banner button.
 *
 * The theme's built-in banner (populated by showVersionWarningBanner)
 * hard-codes the button copy to "Switch to stable version" and gives the
 * button the class `pst-button-link-to-stable-version`. This script
 * rewrites that label to our product copy: "Switch to the latest version".
 *
 * The banner (and its button) only exist when the page is on a
 * non-preferred release, and they are injected asynchronously after the
 * switcher JSON is fetched. So we poll briefly until the button appears.
 */
(function () {
    "use strict";

    var COPY = "Switch to the latest version";
    var BUTTON_SELECTOR = "#bd-header-version-warning a.pst-button-link-to-stable-version";

    function relabel(btn) {
        if (btn && btn.textContent !== COPY) {
            btn.textContent = COPY;
        }
    }

    function start() {
        // If it's already there, relabel now.
        var existing = document.querySelector(BUTTON_SELECTOR);
        if (existing) { relabel(existing); return; }

        var timer = null;
        var deadline = Date.now() + 15000; // give up after ~15s
        timer = setInterval(function () {
            var btn = document.querySelector(BUTTON_SELECTOR);
            if (btn) {
                relabel(btn);
                clearInterval(timer);
            } else if (Date.now() > deadline) {
                clearInterval(timer);
            }
        }, 100);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", start);
    } else {
        start();
    }
})();
