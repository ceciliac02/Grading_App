{
	const personalSettingsButton = document.getElementById("personalSettings");
	const readingButton = document.getElementById("reading");
	const homeworkButton = document.getElementById("homework");
	const statusButton = document.getElementById("status");
	const titleButtons = document.querySelectorAll('.nameTitle');

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