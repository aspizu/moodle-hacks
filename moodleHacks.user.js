// ==UserScript==
// @name        Hacks for learning.dypiu.ac.in
// @namespace   Violentmonkey Scripts
// @match       https://learning.dypiu.ac.in/*
// @match       https://accounts.google.com/o/oauth2/v2/*
// @grant       none
// @version     1.0
// @author      aspizu@protonmail.com
// @description https://github.com/aspizu/moodle-hacks
// @require     https://cdn.jsdelivr.net/npm/@violentmonkey/dom@2
// ==/UserScript==

// Configuration ---------------------------------------------- //
const autoLogin = true;
const autoLoginEmail = "...@dypiu.ac.in";
const openInNewTab = true;
// ------------------------------------------------------------ //

if (location.href.indexOf("?client_id=961990657448") !== -1) {
  if (autoLogin) {
    VM.observe(document.body, () => {
      const element = document.querySelector(
        `[data-identifier="${autoLoginEmail}"]`
      );
      element.click();
    });
  }
} else {
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
  });
}
