
// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fLastN = document.getElementById("fLastN");
	var fAddress = document.getElementById("fAddress");
	var fPassword = document.getElementById("fPassword");
	var fEmail = document.getElementById("fEmail");
	var fPhone = document.getElementById("fPhone");


	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");
	var errorLastN = document.getElementById("errorLastN");
	var errorAddress = document.getElementById("errorAddress");
	var errorPassword = document.getElementById("errorPassword");
	var errorPhone = document.getElementById("errorPhone");

	// Validate fields entered by the user: name, phone, password, and email
	
	errorName.innerHTML = "";
	errorLastN.innerHTML = "";
	errorAddress.innerHTML = "";
	errorPassword.innerHTML = "";
	errorEmail.innerHTML = "";
	errorPhone.innerHTML = "";

	fName.style.border = "1px solid #dee2e6";
	fLastN.style.border = "1px solid #dee2e6";
	fAddress.style.border = "1px solid #dee2e6";
	fPassword.style.border = "1px solid #dee2e6";
	fEmail.style.border = "1px solid #dee2e6";
	fPhone.style.border = "1px solid #dee2e6";



	if (fName.value == "" ||
		fName.value.length < 3 ||
		!validateText(fName.value)
	) {
		error++;
		errorName.innerHTML = "This field is required and must have, at least, 3 characters";
		fName.style.border = "1px solid red";
	
	} 
		
		
	if(fLastN.value == ""  ||
	fLastN.value.length < 3 ||
	!validateText(fLastN.value)
		){
		error++;
		errorLastN.innerHTML = "This field is required and must have, at least, 3 characters";
		fLastN.style.border = "1px solid red";

		
	} 
	

	if(fAddress.value == "" ||
	fAddress.value.length < 3
	){
		error++;
		errorAddress.innerHTML = "This field is required and must have, at least, 3 characters";
		fAddress.style.border = "1px solid red";

	}
	

	if(fPassword.value == ""  ||
	fPassword.value.length < 3 ||
	!validatePassword(fPassword.value)
		){
		error++;
		errorPassword.innerHTML = "Enter a correct password";
		fPassword.style.border = "1px solid red";
		
	} 
	
	
	if(fEmail.value == ""  ||
	fEmail.value.length < 3 ||
	!validateEmail(fEmail.value)
		){
		error++;
		errorEmail.innerHTML = "This field is required and must contain an '@' and have, at least, 3 characters";
		fEmail.style.border = "1px solid red";
		
	}
	
	if(fPhone.value == ""  ||
	fPhone.value.length < 3 ||
	!validatePhone(fPhone.value)
		){
		error++;
		errorPhone.innerHTML = "Invalid phone number!! Must be 9 digits with no letters";
		fPhone.style.border = "1px solid red";
	
	} 


	if (error > 0) {
		alert("There is something wrong...");
		
				
	} else {
		alert("OK!");
		location.reload();
	}


}


let validateText = (text) => {
	let letterPattern = /^[a-zA-Z\s]*$/;
	if (!letterPattern.test(text)) {
		return false;
	} else {
		return true;
	}
}

let validatePassword = (password) => {
	let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d).+$/;
	if (!passwordPattern.test(password)) {
		return false;
	} else {
		return true;
	}
}

let validateEmail = (email) => {
	let emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if (!emailPattern.test(email)) {
		return false;
	} else {
		return true;
	}
}

let validatePhone = (phone) => {
	let phonePattern = /^[6789]\d{8}$/;
	if (!phonePattern.test(phone)) {
		return false;
	} else {
		return true;
	}
}