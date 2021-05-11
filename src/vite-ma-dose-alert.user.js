// ==UserScript==
// @name        Vite ma dose alert
// @match       https://vitemadose.covidtracker.fr/centres-vaccination-covid-dpt67-bas_rhin/commune67482-67100-strasbourg/recherche-chronodoses/en-triant-par-distance
// @grant       none
// @version     1.0
// @author      fermeaux
// @description 11/05/2021, 19:02:28
// ==/UserScript==

let canCheck = true

setInterval(() => {
  const appRoot = document.querySelector('vmd-app').shadowRoot
  const pageRoot = appRoot.querySelector('vmd-rdv-par-commune').shadowRoot
  const refreshButtonElement = pageRoot.querySelector('button')
  if (canCheck) {
    const firstCardRoot = pageRoot.querySelector('vmd-appointment-card').shadowRoot
    if (firstCardRoot.textContent.includes('Chronodoses disponibles')) {
      console.log('found a slot')
      const audio = new Audio()
      audio.src = 'https://wow.zamimg.com/sound-ids/live/enus/71/558663'
      audio.play()
    }
    canCheck = false
  }
  if (!!refreshButtonElement) {
    console.log('refresh')
    refreshButtonElement.click()
    canCheck = true
  }
}, 5000)