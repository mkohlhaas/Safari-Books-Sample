// ==UserScript==
// @name         LearningOreilyRemoveCrap
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Remove crap from Learning Oreilly downloaded files!
// @author       Michael Kohlhaas
// @match        file:///*learning.oreilly.com/library/view/*
// @run-at       context-menu
// @icon         https://www.google.com/s2/favicons?domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
    console.log("test");
    var playlistbuttons = document.querySelectorAll(".js-playlists-menu");
    console.log(playlistbuttons);
    document.querySelectorAll('#js-subscribe-nag')[0].remove();
    for (var playlistbutton of playlistbuttons) {
        // console.log(playlistbutton);
        playlistbutton.remove();
    }
})();
