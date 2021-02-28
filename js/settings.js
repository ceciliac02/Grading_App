{
	import {login} from './homepage.js';
	
	console.log(login);
	
	const personalSettingsButton = document.getElementById("personalSettings");
	const readingButton = document.getElementById("reading");
	const homeworkButton = document.getElementById("homework");
	const statusButton = document.getElementById("status");
	const diffSettings = document.querySelectorAll('.settings')
	const titleButtons = document.querySelectorAll(".nameTitle");
	const personalInfoUpdate = document.getElementById("personalUpdate");

	const settingsBar = [personalSettingsButton, readingButton, homeworkButton, statusButton];

	//Default settings display
	for (j = 0; j < diffSettings.length; j++) {
		diffSettings[j].style.display = "none";
	}
	diffSettings[0].style.display = "flex";

	//Change settings display
	for (let i = 0; i < settingsBar.length; i++) {
		settingsBar[i].addEventListener('click', function () {
			for (j = 0; j < diffSettings.length; j++) {
				diffSettings[j].style.display = "none";
			}
			diffSettings[i].style.display = "flex";
		});
	}

	function personalInfo (fname, lname, gender, title, email) {
		this.fname = fname;
		this.lname = lname;
		let greeting = document.getElementById("greeting");
		greeting.innerHTML = "Welcome, " + fname + " " + lname;
	}

	personalInfoUpdate.addEventListener('click', function () {
		let inputFirstName = document.getElementById("fname").value;
		let inputLastName = document.getElementById("lname").value;
		personalInfo(inputFirstName, inputLastName);
	});
}