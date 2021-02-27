{
	const username = document.getElementById("username");
	const password = document.getElementById("password");
	const enter = document.getElementById("loginEnter");

	let correctUsername = "teacher1*";
	let correctPassword = "schoolname!";
	let login = false;

	enter.addEventListener('click', function () { 
		displayErrorMessage(verifyLogin(username.value, password.value)),
		loggedInStatus(verifyLogin(username.value, password.value))
	});

	function verifyLogin (usernameInput, passwordInput) {
		this.usernameInput = usernameInput;
		this.passwordInput = passwordInput;

		let verification;
		
		if (usernameInput === correctUsername && passwordInput === correctPassword) {
			verification = true;
		}
		else if (usernameInput != correctUsername || passwordInput != correctPassword) {
			verification = false;
		}
		console.log(verification);
		return verification;
	}

	function displayErrorMessage (verification) {
		let errorMessage = document.getElementById("errorMessage");
		if (verification === false) {
			errorMessage.innerHTML = "That is not correct. Please try again.";
		}
		else if (verification === true) {
			errorMessage.innerHTML = "";
		}
	}

	function loggedInStatus (verification) {
		if(verification === true) {
		let loginForm = document.getElementById("loginForm");
		let logout = document.getElementById("logout");
		loginForm.innerHTML = "Logged in";
		loginForm.style.textAlign = "center";
		logout.style.display = "initial";
		console.log("Logged in");
		}
	}
}
