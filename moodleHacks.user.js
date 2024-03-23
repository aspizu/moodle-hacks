// ==UserScript==
// @name        Enhanced Hacks for learning.dypiu.ac.in
// @namespace   Violentmonkey Scripts
// @match       https://learning.dypiu.ac.in/*
// @match       https://accounts.google.com/o/oauth2/v2/*
// @grant       none
// @version     1.0
// @author      contact@udaysinh.me
// @description https://github.com/udaysinh-git/moodle-hacks-enhanced
// @require     https://cdn.jsdelivr.net/npm/@violentmonkey/dom@2
// ==/UserScript==

// Configuration ---------------------------------------------- //
const autoLogin = true;
const autoLoginEmail = "prn@dypiu.ac.in";
const openInNewTab = true;
// ------------------------------------------------------------ //

(function() {
    'use strict';

    // Function to click the continue button
    function clickContinueButton() {
        var continueButton = document.querySelector('button[type="submit"]');
        if (continueButton) {
            continueButton.click();
        }
    }

    VM.observe(document.body, () => {
        if (autoLogin) {
            if (location.href.indexOf("/login") === -1) {
                const element = document.querySelector(".login");
                if (element) {
                    location.href = "/login";
                }
            } else {
                const element = document.querySelector(".login-identityprovider-btn");
                if (element) {
                    element.click();
                }
            }
        }
        if (openInNewTab) {
            for (const element of document.querySelectorAll(".courseindex-link")) {
                element.target = "_blank";
            }
        }
        if (location.href.indexOf("https://learning.dypiu.ac.in/auth/oauth2/login.php?id=1&wantsurl=%2F&sesskey=") !== -1) {
            clickContinueButton();
        }
    });
})();
