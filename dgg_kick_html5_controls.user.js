// ==UserScript==
// @name        DGG Kick HTML5 controls
// @namespace   Violentmonkey Scripts
// @match       *://*player.kick.com/*
// @grant       none
// @version     0.1
// @author      ocyt3
// @description 12/15/2023, 12:44:42 AM
// ==/UserScript==

async function waitForElement(selector, timeout = 15000) {
  const start = Date.now();

  while (Date.now() - start < timeout) {
    const el = document.querySelector(selector);
    if (el) {
      return el;
    }
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  return null;
}

waitForElement(".video-container__controls").then(elem => {
  elem.style.display = "none";
});

waitForElement("video").then(elem => {
  elem.setAttribute("controls", "true")
  console.log(elem);
})
