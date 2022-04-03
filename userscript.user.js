// ==UserScript==
// @name         GrandOrderOverlay
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Original by Osu's: oralekin, LittleEndu, ekgame
// @author       u/FelixLeadner, Lander#2332
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @updateURL    https://github.com/Walter-Hulsebos/r-MonaLisaClan/blob/main/alliance_overlay.user.js
// @downloadURL  https://github.com/Walter-Hulsebos/r-MonaLisaClan/raw/main/alliance_overlay.user.js
// @grant        none
// ==/UserScript==

// Original: https://github.com/iratekalypso/r-place-2022/blob/main/better_alliance_overlay.user.js

if (window.top !== window.self) {
    window.addEventListener('load', () => {
        // Load the image
        const image = document.createElement("img");
        image.src = "https://media.discordapp.net/attachments/959466392686559252/960180289383047208/unknown-11.png?width=685&height=460";
        image.onload = () => {
            image.style = `
            position: absolute;
            top: 0;
            right: 0;
            width: ${image.width/3}px;
            height: ${image.height/3}px;
            image-rendering: pixelated;
            z-index: 1`;
            image.style =
        };

        // Add the image as overlay
        const camera = document.querySelector("mona-lisa-embed").shadowRoot.querySelector("mona-lisa-camera");
        const canvas = camera.querySelector("mona-lisa-canvas");
        canvas.shadowRoot.querySelector('.container').appendChild(image);

        // Add a style to put a hole in the pixel preview (to see the current or desired color)
        const waitForPreview = setInterval(() => {
            const preview = camera.querySelector("mona-lisa-pixel-preview");
            if (preview) {
              clearInterval(waitForPreview);
              const style = document.createElement('style')
              style.innerHTML = '.pixel { clip-path: polygon(-20% -20%, -20% 120%, 37% 120%, 37% 37%, 62% 37%, 62% 62%, 37% 62%, 37% 120%, 120% 120%, 120% -20%); }'
              preview.shadowRoot.appendChild(style);
            }
        }, 100);
    }, false);
}
