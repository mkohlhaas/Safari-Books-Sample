// ==UserScript==
// @name         LearningOreilyRemoveCrap
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Remove crap from Learning Oreilly downloaded files!
// @author       Michael Kohlhaas
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @match        file:///*Books/*
// @run-at       document-start
// @icon         https://www.google.com/s2/favicons?domain=tampermonkey.net
// @grant        none
// ==/UserScript==

waitForKeyElements('#js-subscribe-nag', actionFunction);

function actionFunction (jNode) {
    console.log("test");
    const playlistbuttons = document.querySelectorAll(".js-playlists-menu");
    console.log(playlistbuttons);
    let dom_elements = document.querySelectorAll('#js-subscribe-nag');
    if(dom_elements.length > 0) {dom_elements[0].remove();}
    dom_elements = document.querySelectorAll('#lead');
    if(dom_elements.length > 0) {dom_elements[0].remove();}
    dom_elements = document.querySelectorAll('.pagefoot');
    if(dom_elements.length > 0) {dom_elements[0].remove();}
    dom_elements = document.querySelectorAll('.topbar');
    if(dom_elements.length > 0) {dom_elements[0].remove();}
    dom_elements = document.querySelectorAll('.interface-controls');
    if(dom_elements.length > 0) {dom_elements[0].remove();}
    dom_elements = document.querySelectorAll('div.action');
    if(dom_elements.length > 0) {dom_elements[0].remove();}
    for (let playlistbutton of playlistbuttons) {
        // console.log(playlistbutton);
        playlistbutton.remove();
    }
};
