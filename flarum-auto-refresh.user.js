// ==UserScript==
// @name           giffgaff Flarum auto-refresh
// @description    Automatically refreshes the H&S discussion list every 20 seconds
// @author         David Wheatley <davidwheatley03@gmail.com> (https://github.com/davwheat/giffgaff-flarum-auto-refresh)
// @namespace      https://github.com/davwheat/giffgaff-flarum-auto-refresh
// @version        1.0.2
// @icon           https://github.com/davwheat/giffgaff-flarum-auto-refresh/blob/master/icon.png?raw=true
// @match          *://community.giffgaff.com/*
// @grant          none
// @run-at         document-end
// ==/UserScript==

setInterval(() => {
    if (window.location.pathname !== "/t/help-and-support") {
        console.info("Not refreshing discussion list: not on H&S tag page.")
    }
    
    $("main.App-content  div.IndexPage-toolbar li.item-refresh > button").click()
    
    console.info("Refreshed discussion list.");
}, 20 * 1000);


console.log(`%c Don't paste anything down here which someone tells you to!`, 'color: red; font-size: 64px; font-weight: bold; background: yellow;');
console.log(`%c It could be a hacker trying to steal your details and take over your account!`, 'color: red; font-size: 24px; font-weight: bold; background: white;');
