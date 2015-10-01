// ==UserScript==
// @name         Magento Inject IPN from Admin (DEV!)
// @namespace    http://www.expertime.com/
// @version      1.0
// @description  Magento inject IPN from admin page (DEV!)
// @author       M.TUDURY
// @match        http://*.dev/index.php/*/sales_order/view/order_id/*/key/*/
// @grant        unsafeWindow
// @grant        GM_log
// ==/UserScript==

    // test de mise a jour !
(function () {
    var $;

    // Add jQuery
    (function(){
        if (typeof unsafeWindow.jQuery == 'undefined') {
            var GM_Head = document.getElementsByTagName('head')[0] || document.documentElement,
                GM_JQ = document.createElement('script');
    
            GM_JQ.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
            GM_JQ.type = 'text/javascript';
            GM_JQ.async = true;
    
            GM_Head.insertBefore(GM_JQ, GM_Head.firstChild);
        }
        GM_wait();
    })();

    // Check if jQuery's loaded
    function GM_wait() {
        if (typeof unsafeWindow.jQuery == 'undefined') {
            window.setTimeout(GM_wait, 100);
        } else {
            $ = unsafeWindow.jQuery.noConflict(true);
            letsJQuery();
        }
    }
    
    
    function letsJQuery() {
        GM_log($().jquery); // check jQuery version
        $('.content-header .form-buttons').prepend( "<button id=\"payboxpaymentdo\" title=\"PlayPayboxPayment\" type=\"button\" class=\"scalable\"><span><span><span>PlayPayboxPayment</span></span></span></button>" );
        $('#payboxpaymentdo').click(callpayboxipn);
    }
    
    function callpayboxipn() {
        var data = new Object();
        data.R = $('title').text().substring(1,10);
        data.M = 9999;
        data.E = "00000";
        data.T = data.R;
        data.Q = "00:00";
        data.W = "1/1/2015";
        data.K = "signed";
        data.S = data.R;
        data.C = 'VISA';

        $.post('/paybox/payment/ipnover/', data);
    }
    
})();
