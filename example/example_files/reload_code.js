function AAPL_reload_code() {
//This file is generated from the admin panel - dont edit here! 
jQuery.getScript(templateDir+"/assets/js/scripts.js", function(data, textStatus, jqxhr){ });
jQuery.getScript(pDir+"/hoost/assets/js/hoostscripts.js", function(data, textStatus, jqxhr){ });
jQuery.getScript(pDir+"/quick-chat/js/quick-chat-init.js", function(data, textStatus, jqxhr){ });
FB.XFBML.parse();
}

function AAPL_click_code(thiss) {
//This file is generated from the admin panel - dont edit here! 
// highlight the current menu item
jQuery('ul.menu li').each(function() {
	jQuery(this).removeClass('.current-menu-item');
});
jQuery(thiss).parents('li').addClass('current-menu-item');
}

function AAPL_data_code(dataa) {
//This file is generated from the admin panel - dont edit here! 

}