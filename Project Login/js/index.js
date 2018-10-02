$(document).ready(function() {
	//Display the Formular
	displayFormular();
	
	//When Click on Logout
	$("#logout").click(function() {
		//Set Access False
		localStorage.setItem("access", "false");
		
		//Hide the Formular and Redirect
		hideFormularAndRedirect("login.html");
	});
	
	//When Click on Update
	$("#update").click(function() {
		//Hide the Formular and Redirect
		hideFormularAndRedirect("update.html");
	});
	
	//When Click on Delete
	$("#delete").click(function() {
		//Deletes the User Data
		deleteUserData();
		
		//Hide the Formular and Redirect
		hideFormularAndRedirect("login.html");
	});
});

//Compares the Stored Data with the Input Data and Validates it
function deleteUserData() {
	localStorage.clear();
}

//Show Formular
function displayFormular() {
	//Calculate Middle Position - Horizontal
	windowHeight = $(window).height();
	formularHeight = $("#divFormular").outerHeight();
	deciredTopPosition = windowHeight/2 - formularHeight/2;
	
	//Place the Formular Outside the Screen
	$("#divFormular").css({"top" : -formularHeight});
	
	//Animates the Formular
	$("#divFormular").animate({
	    opacity: 1,
	    top: deciredTopPosition
	}, 1000, function() {
	    //Animation complete
	});
}

//Hide Formular en Redirect
function hideFormularAndRedirect(destination) {
	//Remove Overflow
	$("body").css({"overflow" : "hidden"});
	
	//Get Window Height
	windowHeight = $(window).height();
	
	//Animates the Formular
	$("#divFormular").animate({
	    opacity: 1,
	    top: windowHeight
	}, 1000, function() {
	    //Animation complete - Now Redirect
	    $(location).attr("href", destination);
	});	
}