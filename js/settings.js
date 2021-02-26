{
	const personalSettingsButton = document.getElementById("personalSettings");
	const readingButton = document.getElementById("reading");
	const homeworkButton = document.getElementById("homework");
	const statusButton = document.getElementById("status");
	const diffSettings = document.querySelectorAll('.settings')
	const titleButtons = document.querySelectorAll(".nameTitle");

	const settingsBar = [personalSettingsButton, readingButton, homeworkButton, statusButton];

	for (j = 0; j < diffSettings.length; j++) {
		diffSettings[j].style.display = "none";
	}
	diffSettings[0].style.display = "flex";

	for (let i = 0; i < settingsBar.length; i++) {
		settingsBar[i].addEventListener('click', function () {
			for (j = 0; j < diffSettings.length; j++) {
				diffSettings[j].style.display = "none";
			}
			diffSettings[i].style.display = "flex";
		});
	}

	class LoginInfo {
		firstName = "Jane";
		lastName = "Doe";
		gender = "Female";
		title = titleButtons[0].checked;
		email = "doe_jane@school.com";
	}

	/*for (let i = 0; i < titleButtons.length; i++) {
		titleButtons[i].addEventListener('click', function () {
			titleButtons[i]
		});
	}*/

	personalSettingsButton.addEventListener('click', function () {
	});
}