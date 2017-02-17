/**
 * Created by Sid on 17-01-2017.
 */
/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2016, Codrops
 * http://www.codrops.com
 */
;(function (window) {

    'use strict';

    var pianoEl = document.querySelector('.content--instrument > .piano'),
        isMobile = mobilecheck();

    function init() {
        // The canvas animation for the wave.
        // https://github.com/caffeinalab/siriwavejs


        // Preload all sounds and initialize the instruments.
        MIDI.loadPlugin({
            soundfontUrl: './soundfont/',
            instruments: ['acoustic_grand_piano'],
            onsuccess: function () {
                document.body.classList.remove('loading');
                // Initialize the Piano.
                new Piano(pianoEl);
                // Initialize the Guitar.
                initEvents();
            }
        });
    }

    function initEvents() {
        if (isMobile) {
            tinyChimesEl.addEventListener('touchstart', function () {
                tinyChimes.playSequence();
            });
        }
    }

    init();

})(window);




