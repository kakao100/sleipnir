// ==UserScript==
// @name            my ad brock
// @name:ja         my ad brock
// @author          cutcake
// @description     this app is ad brocker 
// @description:ja  このアプリはアドブロッカーです
// @include http://*
// @include https://*
// @version         0.0.1
// @history         0.0.1 upload
// @history:ja      0.0.1 アップロード
// @require         jquery
// ==/UserScript==

if (location.href.indexOf("https://splatoon-nawabari.com/") >= 0) {
    function removeads() {
        jQuery('div[id*="glssp_div_container"]').remove();
    }
    removeads();
    setInterval(removeads, 1000);
}