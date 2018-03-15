(function($){
  "use strict";

$('#searchform').on('submit', function() { // Search
    ga('send', {
    'hitType': 'event', // Required.
    'eventCategory': 'form', // Required.
    'eventAction': 'submit', // Required.
    'eventLabel': 'Search'
    });
  });
  
  $('#news-items a').on('click', function() { // News Item
    ga('send', {
    'hitType': 'event', // Required.
    'eventCategory': 'outbound', // Required.
    'eventAction': 'click', // Required.
    'eventLabel': 'News Item URL'
    });
  });
  
  $('#global-nav a:contains("Attack")').on('click', function() { // Live Map
    ga('send', {
    'hitType': 'event', // Required.
    'eventCategory': 'outbound', // Required.
    'eventAction': 'click', // Required.
    'eventLabel': 'Map URL'
    });
  });
  
  $('#global-nav a:contains("Get Norse")').on('click', function() { // Contact
    ga('send', {
    'hitType': 'event', // Required.
    'eventCategory': 'button', // Required.
    'eventAction': 'click', // Required.
    'eventLabel': 'Contact URL'
    });
  });
  
  $('#global-nav a:contains("Blog")').on('click', function() { // Blog
    ga('send', {
    'hitType': 'event', // Required.
    'eventCategory': 'outbound', // Required.
    'eventAction': 'click', // Required.
    'eventLabel': 'Blog URL'
    });
  });
  var consoleMessage = "                          #######                                                                                \n                     #################         ####   #####    #####    #########       ######     ##########    \n                   #####################       ####   #####  #########  ###########   ##########   ##########    \n                  #######################      #####  ##### ####   #### ####   ##### #####   ####  ###           \n                 #########################     ###### ##### ###     ### ####    #### ####    ####  ###           \n                ###### ###### ###### ######    ############ ###     ### ####    #### #####         ###           \n                ########   #####   ########    ### ######## ###     ### ############    #####      #########     \n                ########   #####   ########    ###  ####### ###     ### ##########        #####    #########     \n                ###### ###### ###### ######    ###   ###### ###     ### ####  ####           ####  ###           \n                 #########################     ###    ##### ###     ### ####   ####  ####    ####  ###           \n                  #######################      ###    ##### ####   #### ####   ##### #####  #####  ###           \n                   #####################       ###    #####  #########  ####    ####  ##########   ##########    \n                     #################         ###    #####    #####    ####     ####   ######     ##########    \n                          #######                                                                                \n             \n             Hi!\n             \n             Our dev team is always seeking great developers for our great products that change security! If you'd like to join us, we'd be very pleased to have you! Check out our open positions at http://www.norse-corp.com/careers.html and send us an ASCII resume!\n";
  console.log(consoleMessage);
}(jQuery));
