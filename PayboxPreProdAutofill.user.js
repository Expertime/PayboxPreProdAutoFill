// ==UserScript==
// @name         Automate de paiement paybox
// @namespace    http://www.expertime.com/
// @version      0.1
// @description  Automatise la saisie de la carte de test sur le site de preprod paybox
// @author       M.TUDURY
// @match        https://preprod-tpeweb.paybox.com/cgi/MYpagepaiement.cgi
// @grant        none
// ==/UserScript==

var num_carte = document.getElementById('NUMERO_CARTE');
if (num_carte) {
    num_carte.value = '1111222233334444';
    document.getElementById('MOIS_VALIDITE').selectedIndex = 11;
    document.getElementById('AN_VALIDITE').selectedIndex = 2;
    document.getElementById('CVVX').value = "123";
}

