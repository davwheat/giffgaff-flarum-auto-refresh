// ==UserScript==
// @name           giffgaff Flarum auto-refresh
// @description    Automatically refreshes the discussion list every 20 seconds
// @author         David Wheatley <davidwheatley03@gmail.com> (https://github.com/davwheat/giffgaff-flarum-auto-refresh)
// @namespace      https://github.com/davwheat/giffgaff-flarum-auto-refresh
// @version        1.0.0
// @icon           https://github.com/davwheat/giffgaff-flarum-auto-refresh/blob/master/icon.png?raw=true
// @match          *://community.giffgaff.com/*
// @grant          none
// @run-at         document-end
// ==/UserScript==

setInterval(() => {
    $("main.App-content .IndexPage-nav div.IndexPage-toolbar li.item-refresh > button").click()
    
    console.log("Refreshed discussion list.");
}, 20 * 1000);
