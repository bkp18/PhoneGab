accessDB = localStorage.getItem("access");

if(accessDB != "true") {
	$(location).attr("href", "login.html");
}
