$(document).ready(function() {
	//Display the Formular
	displayFormular();
	
	//When Click on Update
	$("#update").click(function() {
		//Validate the Login Input
		catchAndValidateInput();
	});
	
	//When Click on Back
	$("#back").click(function() {
		///Hide Formular and Redirect
		hideFormularAndRedirect("index.html");
	});
});

//Catch and Validate Input
function catchAndValidateInput() {
	//Retrieve User Data from Input Fields
	usernameInput = $("#username").val();
	passwordInput = $("#password").val();
	
	//Check for Empty Fields
	if(usernameInput != "" && passwordInput != "") {
		//Store Data in Database
		localStorage.setItem("usernameDB", usernameInput);
		localStorage.setItem("passwordDB", passwordInput);
	
		//Hide Formular and Redirect
		hideFormularAndRedirect("index.html");
	}
	else {
		//Display Error Message
		displayErrorMessage("Tomt Brugernavn og eller Password...");
	}
}

//Displays an Error Message
function displayErrorMessage(message) {
	$(".message").html(message).effect("shake");
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
