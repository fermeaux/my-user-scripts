// ==UserScript==
// @name        Vaccine Alert - doctolib.fr
// @namespace   Violentmonkey Scripts
// @match       https://www.doctolib.fr/vaccination-covid-19/*
// @grant       none
// @version     1.0
// @author      fermeaux
// @description 23/05/2021, 09:43:03
// ==/UserScript==

const classToCheck = '.js-dl-search-results-calendar'
const sentenceToFind = "Aucun rendez-vous de vaccination n'est disponible dans ce lieu d'ici demain soir."
const timeToCheck = 1000 * 4 
const timeToRefresh = 1000 * 20 
const errorNotFoundElementMessage = "There is a problem with the script because it doesn't find the element to check, try to resize your webview in a bigger size"
const noSlotAvailableMessage = "There is no slot available, wait for the refresh, we will alert you when one is available"
const findSlotAvailableMessage = "We find a slot ! Check it out"
const audio = new Audio()
audio.src = 'http://noproblo.dayjo.org/ZeldaSounds/OOT/OOT_Get_SmallItem1.wav'

setTimeout(() => {
  const elementToCheck = document.querySelector(classToCheck)
  if (elementToCheck == null) {
    console.error(errorNotFoundElementMessage)
  }
  else if (!elementToCheck.textContent.includes(sentenceToFind)) {
    console.log(findSlotAvailableMessage)
    audio.play()
  }
  else {
    console.log(noSlotAvailableMessage)
  }
}, timeToCheck)

setTimeout(() => {
  document.location.reload()
}, timeToRefresh)