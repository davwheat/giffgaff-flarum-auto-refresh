// ==UserScript==
// @name           giffgaff Flarum auto-refresh
// @description    Automatically refreshes the H&S discussion list every 20 seconds
// @author         David Wheatley <davidwheatley03@gmail.com> (https://github.com/davwheat/giffgaff-flarum-auto-refresh)
// @namespace      https://github.com/davwheat/giffgaff-flarum-auto-refresh
// @version        1.2.1
// @icon           https://github.com/davwheat/giffgaff-flarum-auto-refresh/blob/master/icon.png?raw=true
// @match          *://community.giffgaff.com/*
// @grant          none
// @run-at         document-end
// ==/UserScript==

// Interval between refreshes (seconds)
const refreshInterval = 20;

// list of enabled paths
// !! don't include any query parameters (e.g. ?sort=xxxx) !!
const enabledPaths = [
    "/t/help-and-support"
];

setInterval(() => {
    if (!enabledPaths.includes(window.location.pathname)) {
        console.info("Not refreshing discussion list. Page not on list of enabled paths.", enabledPaths)
        return
    }
    
    // literally just find the refresh button and click it lol
    $("main.App-content  div.IndexPage-toolbar li.item-refresh > button").click()
    
    console.info("Refreshed discussion list.");
}, refreshInterval * 1000);


console.log(`%c Don't paste anything down here which someone tells you to!`, 'color: red; font-size: 64px; font-weight: bold; background: yellow;');
console.log(`%c It could be a hacker trying to steal your details and take over your account!`, 'color: red; font-size: 24px; font-weight: bold; background: white;');
