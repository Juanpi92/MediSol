let email = document.getElementById("email");
let submit = document.getElementById("submit");

let recuperar = document.getElementById("recuperar");
let alterar = document.getElementById("alterar");


submit.addEventListener("submit", function (e) {	

	if (email == "") {
		alert("Insira e-mail!");
		e.preventDefault();
	} else {
		recuperar.style.display = "none";
		alterar.style.display = "block";
	}


});