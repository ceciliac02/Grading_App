{

	let studentNameTemplate = document.querySelectorAll(".studentName");
	let studentNameClone = studentNameTemplate[0].cloneNode(true);
	let idTemplate = document.querySelectorAll(".id");
	let idClone = idTemplate[0].cloneNode(true);
	let totalGradeTemplate = document.querySelectorAll(".totalGrade");
	let totalGradeClone = totalGradeTemplate[0].cloneNode(true);
	let homeworkTemplate = document.querySelectorAll(".homework");
	let homeworkClone = homeworkTemplate[0].cloneNode(true);
	let testTemplate = document.querySelectorAll(".test");
	let testClone = testTemplate[0].cloneNode(true);

	let students = ["Thorp, Mike", "Lavinsky, Molly", "Kaiser, Alan", "Brown, Patricia", "Bowers, Vivian", "Morales, Caden", "Pierce, Ryan", "Veracruz, Leticia", "Fox, Darius", "Tran, Jordan", "Juarez, Emilio", "Stone, Rebecca", "Fuentes, Marycruz"];
	
	students = students.sort();

	const countStudents = (studentsArray) => studentsArray.length;

	function appendClones (numberOfStudents) {
		for (let i = 0; i < numberOfStudents; i++) {
			document.getElementById("container").appendChild(studentNameClone);
			document.getElementById("container").appendChild(idClone);
			document.getElementById("container").appendChild(totalGradeClone);
			document.getElementById("container").appendChild(homeworkClone);
			document.getElementById("container").appendChild(testClone);
			console.log("done");
		}
	}

	appendClones(countStudents(students));
	
	
	
}