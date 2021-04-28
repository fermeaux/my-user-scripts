// ==UserScript==
// @name        Twitch Collect Button
// @match       https://www.twitch.tv/*
// @grant       none
// @version     1.0
// @author      fermeaux
// @description 28/04/2021, 18:26:09
// ==/UserScript==

let lastClick = Date.now()

setInterval(() => {
    const collectButtonElement = document.querySelector('.community-points-summary button.tw-button.tw-button--success')
    if (collectButtonElement == null) return
    collectButtonElement.click()
    const elapsedTime = Math.floor((Date.now() - lastClick) / 1000)
    console.log(`Temps passé à attendre pour cliquer sur le bouton de collecte : ${elapsedTime} secondes`)
    lastClick = Date.now()
}, 5000)