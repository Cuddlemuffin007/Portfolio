//Place all the behaviors and hooks related to the matching controller here.
//All this logic will automatically be available in application.js.
//You can use CoffeeScript in this file: http://coffeescript.org/
$(document).ready(function() {
	$('#contact_form_message').focus(function() {
		if ([this.value === this.defaultValue]) {
			[this.value = ''];
		}
	}).blur(function() {
		if ([this.value === '']) {
			[this.value = this.defaultValue];
		}
	});
	$('button').click(function () {
		$(this).css("background-color", "#0f0");
	});
});
