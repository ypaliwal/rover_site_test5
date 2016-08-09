$(document).ready(function() {

	$(".renters").hide();
	$(".about").hide();

	$(".ownersBtn").toggleClass("btn-danger");
	
	$("#currentView").addClass("ownersView");


	// Click events
	$(".ownersBtn").click(function() {
		if($("#currentView").hasClass("ownersView")) {
			// do nothing
		} else {
			$("#currentView").removeClass();
			$("#currentView").addClass("ownersView");
			
			$(".owners").show();

			$(".renters").hide();
			$(".about").hide();

			if(!$(".rentersBtn").hasClass("btn-danger")) {
				$(".rentersBtn").addClass("btn-danger");
			}

			if(!$(".aboutBtn").hasClass("btn-danger")) {
				$(".aboutBtn").addClass("btn-danger");
			}

			$(".ownersBtn").removeClass("btn-danger");
		}
	});

	$(".rentersBtn").click(function() {
		if($("#currentView").hasClass("rentersView")) {
			// do nothing
		} else {
			$("#currentView").removeClass();
			$("#currentView").addClass("rentersView");
			
			$(".renters").show();

			$(".owners").hide();
			$(".about").hide();

			if(!$(".ownersBtn").hasClass("btn-danger")) {
				$(".ownersBtn").addClass("btn-danger");
			}

			if(!$(".aboutBtn").hasClass("btn-danger")) {
				$(".aboutBtn").addClass("btn-danger");
			}

			$(".rentersBtn").removeClass("btn-danger");
		}
	});

	$(".aboutBtn").click(function() {
		if($("#currentView").hasClass("aboutView")) {
			// do nothing
		} else {
			$("#currentView").removeClass();
			$("#currentView").addClass("aboutView");
			
			$(".about").show();

			$(".owners").hide();
			$(".renters").hide();

			if(!$(".ownersBtn").hasClass("btn-danger")) {
				$(".ownersBtn").addClass("btn-danger");
			}

			if(!$(".rentersBtn").hasClass("btn-danger")) {
				$(".rentersBtn").addClass("btn-danger");
			}

			$(".aboutBtn").removeClass("btn-danger");
		}
	});

});