// ==UserScript==
// @name         Glue00P-Subtle
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Disable copy pate restriction in skillrack
// @author       Technophilic
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser-polyfill.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser.min.js
// @require http://code.jquery.com/jquery-latest.js
// @match *://www.skillrack.com/*
// @match *://skillrack.com/*
// ==/UserScript==

/* jshint ignore:start */
var inline_src = (<><![CDATA[
    /* jshint ignore:end */
    /* jshint esnext: true */
    //==================================================
    //  ____   ____.__                      __  .__     
    //  \   \ /   /|__| ____   ____   _____/  |_|  |__  
    //   \   Y   / |  |/    \_/ __ \_/ __ \   __\  |  \ 
    //    \     /  |  |   |  \  ___/\  ___/|  | |   Y  \
    //     \___/   |__|___|  /\___  >\___  >__| |___|  /
    //                     \/     \/     \/          \/ 
    //===================================================
    $('head').append('<title>Disabling security ...</title>');
    $('body').html($('body').html().replace('diff = nlen - olen;', 'diff = 0;'));
    $('title').text("Security Disabled");
    $('#LScreen').remove();
    $("body").css("overflow","visible");
    $('#j_id_5d > span').click(function(){
    $(this).text('Saved !!');
    $('title').text("#technophilic");
    });
    
    //==============================================
    /* jshint ignore:start */
]]></>).toString();
                  var c = babel.transform(inline_src);
eval(c.code); 
/* jshint ignore:end */
