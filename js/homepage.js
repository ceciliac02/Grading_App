{
	const username = document.getElementById("username");
	const password = document.getElementById("password");
	const enter = document.getElementById("loginEnter");
	let logout = document.getElementById("logout");
	let loginForm = document.getElementById("loginForm");
	const logoutForm = document.getElementById("logoutForm");
	const navIcon = document.querySelectorAll(".navIcon");
	const navbar = document.getElementById("navbar");

	//Sets login information and status as logged out
	let correctUsername = "teacher1*";
	let correctPassword = "schoolname!";
	let login = false;

	//Displays error message or logged in status after submitting
	enter.addEventListener('click', function () { 
		displayErrorMessage(verifyLogin(username.value, password.value)),
		loggedInStatus(verifyLogin(username.value, password.value))
	});

	//Sets css to display when logged out
	logout.addEventListener('click', function () {
		if (login === true) {
			logoutForm.innerHTML = "Logged out";
			login = false;
			setTimeout(function () { 
				logoutForm.style.display = "none"; 
				loginForm.style.display = "initial";
				}, 2000);
			return login;
		}
	});

	navIcon[0].addEventListener('click', openNavbar);

	//Checks and verifies the login credentials
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

	//Displays an error message if incorrect credentials are entered
	function displayErrorMessage (verification) {
		let errorMessage = document.getElementById("errorMessage");
		if (verification === false) {
			errorMessage.innerHTML = "That is not correct. Please try again.";
		}
		else if (verification === true) {
			errorMessage.innerHTML = "";
		}
	}

	//Displays logged in status using css
	function loggedInStatus (verification) {
		if(verification === true) {
			logoutForm.style.display = "initial";
			loginForm.style.display = "none";
			login = true;
			return login;
		}
	}

	function openNavbar () {
		if (navbar.style.visibility == "hidden"){
			navbar.style.visibility = "initial";
		}
		else {
			navbar.style.visibility = "hidden";
		}
	}
}
