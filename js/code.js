// JavaScript source code
{
	let students = ["Thorp, Mike", "Lavinsky, Molly", "Kaiser, Alan", "Brown, Patricia", "Bowers, Vivian", "Morales, Caden", "Pierce, Ryan", "Veracruz, Leticia", "Fox, Darius", "Tran, Jordan", "Juarez, Emilio", "Stone, Rebecca", "Fuentes, Marycruz"];
	
	students = students.sort();

	students.forEach(function(names) {
		console.log(names);
	});
	
	let str = '<ul>';
	students.forEach(function(names){
		str += '<li>' + names + '</li>';
	});
	str += '</ul>';
	document.getElementById("studentList").innerHTML = str;

	let studentOutput = document.getElementById("studentNameHTML");

	let studentName;

	document.getElementById("enter").onclick = function () {
		studentName = document.getElementById("studentNameInput").value;
	}

	/*while (students.includes(studentName) == false) {
		let noStudent = `There is no student by the name of ${studentName}. Try again`;
		studentOutput.innerHTML = noStudent;
	}
	if (students.includes(studentName)) {
		let studentID = students.indexOf(studentName);
		let studentSelect = `You've selected ${studentName}.`;
		studentOutput.innerHTML = studentSelect;
	}*/

	

	
}