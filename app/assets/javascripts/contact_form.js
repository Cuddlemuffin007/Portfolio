//Place all the behaviors and hooks related to the matching controller here.
//All this logic will automatically be available in application.js.
//You can use CoffeeScript in this file: http://coffeescript.org/
var ready = function() {
	$('#contact_form_message').focus(function() {
		if ([this.value === this.defaultValue]) {
			[this.value = ''];
		}
	});
	$('button').click(function () {
		$(this).css("background-color", "#0f0");
	});
}
$(document).ready(ready);
$(document).on('page:load', ready);