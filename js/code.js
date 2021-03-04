{
	let studentSpreadsheet = document.getElementById("spreadsheet");
	let spreadsheetRows = document.getElementsByTagName("TR");
	let spreadsheetCells = document.getElementsByTagName("TD");

	let studentNames = ["Thorp, Mike", "Lavinsky, Molly", "Kaiser, Alan", "Brown, Patricia", "Bowers, Vivian", "Morales, Caden", "Pierce, Ryan", "Veracruz, Leticia", "Fox, Darius", "Tran, Jordan", "Juarez, Emilio", "Stone, Rebecca", "Fuentes, Marycruz"];

	studentNames = studentNames.sort();

	class Student {
		constructor(name, id) {
			this.name = name;
			this.id = id;
		}
		totalGrade = undefined;
		homework = undefined;
		test = undefined;
	}

	console.log(createIdNumber().join("").toString());

	let student1 = new Student(studentNames[0], "960222");
	student1.totalGrade = "100%";

	let student2 = new Student(studentNames[1], "871034");

	let student3 = new Student(studentNames[2], "835468");

	let student4 = new Student(studentNames[3], "196649");
	let students = [student1, student2, student3, student4];
	console.log(student1, student2, student3, student4);

	function createIdNumber () {
		let studentID = [];
		for (let i = 0; i < 6; i++) {
			studentID.push(Math.floor(Math.random() * 10));
		}
		return studentID;
	}

	(function addRowsAndCells () {
		for (let i = 0; i < students.length - 1; i++) {
			let rows = document.createElement("TR");
			for (let j = 0; j < 5; j++) {
				let cells = document.createElement("TD");
				rows.appendChild(cells);
			}
			studentSpreadsheet.appendChild(rows);
			console.log("Done");
		}
	})();

	(function addClassLists () {
		for (let i = 1; i <= students.length; i++) {
			for (let j = 0; j < 5; j++) {
				switch (j) {
					case 0: 
						studentSpreadsheet.rows[i].cells[j].classList.add("studentName");
						break;
					case 1:
						studentSpreadsheet.rows[i].cells[j].classList.add("id");
						break;
					case 3:
						studentSpreadsheet.rows[i].cells[j].classList.add("totalGrade");
						break;
					case 4:
						studentSpreadsheet.rows[i].cells[j].classList.add("homework");
						studentSpreadsheet.rows[i].cells[j].classList.add("grades");
						break;
					case 4:
						studentSpreadsheet.rows[i].cells[j].classList.add("test");
						studentSpreadsheet.rows[i].cells[j].classList.add("grades");
						break;
				}
			}
		}
	})();

	let cellsInEaRow = Math.round(spreadsheetCells.length / spreadsheetRows.length);
	for (let i = 1; i < spreadsheetRows.length; i++) {
		for (let j = 1; j <= cellsInEaRow; j++){
			studentSpreadsheet.rows[i].addEventListener('mouseover', function () {
				studentSpreadsheet.rows[i].cells[0].classList.add("nameHighlighted");
				studentSpreadsheet.rows[i].cells[j].classList.add("highlighted");
			});
			studentSpreadsheet.rows[i].addEventListener('mouseleave', function () {
				studentSpreadsheet.rows[i].cells[0].classList.remove("nameHighlighted");
				studentSpreadsheet.rows[i].cells[j].classList.remove("highlighted");
			})
		}
	}
	
	(function appendStudentNames () {
		for (let i = 1; i <= students.length; i++) {
			studentSpreadsheet.rows[i].cells[0].innerHTML = students[i - 1].name;
			studentSpreadsheet.rows[i].cells[1].innerHTML = students[i - 1].id;
		}
	})();

	function appendIDNumbers () {

	}
	
}