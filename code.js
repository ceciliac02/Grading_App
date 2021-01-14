// JavaScript source code
{
	let students = ["Thorp, Mike", "Lavinsky, Molly", "Kaiser, Alan", "Brown, Patricia", "Bowers, Vivian", "Morales, Caden", "Pierce, Ryan", "Veracruz, Leticia", "Fox, Darius", "Tran, Jordan", "Juarez, Emilio", "Stone, Rebecca", "Fuentes, Marycruz"];
	
	students = students.sort();

	students.forEach(function(names) {
		console.log(names);
	});

	let studentOutput = document.getElementById("studentNameHTML");

	document.getElementById("enter").onclick = function () {
		let studentName = document.getElementById("studentNameInput").value;
		studentOutput.innerHTML = studentName;
	}

	//let studentName = prompt("Enter a student's name:");

	/*while (students.includes(studentName) == false) {
		console.log(`There is no student by the name of ${studentName}. Try again`);
		studentName = prompt("Enter a student's name:");
	}
	if (students.includes(studentName)) {
		let studentID = students.indexOf(studentName);
		console.log(`You've selected ${studentName}. What would you like to do?`);
	}*/

	

	
}