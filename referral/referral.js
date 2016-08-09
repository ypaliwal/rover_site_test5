$(document).ready(function() {
	var addFormInputs 
		= '<div class="theForm row">'
		+ '<p class="col-md-2 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12 red text-left">FRIEND\'S EMAIL:</p>'
		+ '<input  class="col-md-3 col-md-offset-1 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1 formInput" type="text" placeholder="email address">'
		+ '</div>';



	$(".addMore").click(function() {
		$("#refFormInputs").append(addFormInputs);
	});
	


});