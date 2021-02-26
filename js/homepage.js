{
	const username = document.getElementById("username");
	const password = document.getElementById("password");
	const enter = document.getElementById("loginEnter");

	let correctUsername = "teacher1*";
	let correctPassword = "schoolname!";
	let login = false;

	enter.addEventListener('click', function () {
		let inputUsername = username.value;
		let inputPassword = password.value;
		console.log (inputUsername, inputPassword);

		if (inputUsername != correctUsername | inputPassword != correctPassword) {
			let errorMessage = document.getElementById("errorMessage");
			errorMessage.innerHTML = "That is not correct. Please try again.";
		}
		else if (inputUsername === correctUsername && inputPassword === correctPassword) {
			errorMessage.innerHTML = "";
			login = true;
			console.log(login);
		}
		if (login === true) {
			let loginForm = document.getElementById("loginForm");
			let logout = document.getElementById("logout");
			loginForm.innerHTML = "Logged in";
			loginForm.style.textAlign = "center";
			logout.style.display = "initial";
			console.log("Logged in");
		}
	});
}
