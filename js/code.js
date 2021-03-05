{
	let studentSpreadsheet = document.getElementById("spreadsheet");
	let spreadsheetRows = document.getElementsByTagName("TR");
	let spreadsheetCells = document.getElementsByTagName("TD");

	let studentNames = ["Thorp, Mike", "Lavinsky, Molly", "Kaiser, Alan", "Brown, Patricia", "Bowers, Vivian", "Morales, Caden", "Pierce, Ryan", "Veracruz, Leticia", "Fox, Darius", "Tran, Jordan", "Juarez, Emilio", "Stone, Rebecca", "Fuentes, Marycruz", "Sanders, Greg", "Huyhn, Edward", "Kapoor, Anika"];

	studentNames = studentNames.sort();

	class Student {
		constructor(name, id) {
			this.name = name;
			this.id = id;
		}
		totalGrade = "";
		homework = "";
		test = "";
	}

	console.log(createIdNumber().join("").toString());

	//Creates a random ID number for the students
	function createIdNumber () {
		let studentID = [];
		for (let i = 0; i < 6; i++) {
			studentID.push(Math.floor(Math.random() * 10));
		}
		return studentID;
	}
	let students = [];
	(function createStudent () {
		for (let i = 0; i < studentNames.length; i++) {
			let student = new Student(studentNames[i]);
			students.push(student);
		}
	})();

	students[0].id = "960222";
	students[1].id = "871034";
	students[2].id = "835468";
	students[3].id = "196649";
	students[4].id = "613235";
	students[5].id = "761185";
	students[6].id = "812976";
	students[7].id = "279382";
	students[8].id = "892070";
	students[9].id = "329556";
	students[10].id = "131267";
	students[11].id = "399410";
	students[12].id = "082297";

	//Appends rows and cells to the table dependant on the number of students
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

	//Adds classes to the appended cells
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

	//Adds student information to the table
	(function appendStudentInfo () {
		for (let i = 1; i <= students.length; i++) {
			studentSpreadsheet.rows[i].cells[0].innerHTML = students[i - 1].name;
			studentSpreadsheet.rows[i].cells[1].innerHTML = students[i - 1].id;
			studentSpreadsheet.rows[i].cells[2].innerHTML = students[i - 1].totalGrade;
			studentSpreadsheet.rows[i].cells[3].innerHTML = students[i - 1].homework;
			studentSpreadsheet.rows[i].cells[4].innerHTML = students[i - 1].test;
		}
	})();

	let cellsInEaRow = Math.round(spreadsheetCells.length / spreadsheetRows.length);
	(function makeEditable () {
		for (let i = 1; i < spreadsheetRows.length; i++) {
			for (let j = 3; j < cellsInEaRow; j++) {
				studentSpreadsheet.rows[i].cells[j].contentEditable = "true";
			}
		}
	})();

	for (let i = 1; i < spreadsheetRows.length; i++) {
		//Highlights the row on mouse over
		studentSpreadsheet.rows[i].addEventListener('mouseover', function () {
			for (let j = 0; j < cellsInEaRow; j++) {
				studentSpreadsheet.rows[i].cells[j].classList.add("highlighted");
			}
		});
		//Removes highlight when the mouse leaves
		studentSpreadsheet.rows[i].addEventListener('mouseleave', function () {
			for (let j = 0; j < cellsInEaRow; j++) {
				studentSpreadsheet.rows[i].cells[j].classList.remove("highlighted");
			}
		});
		//Sets highlight on selected row and removes from all highlight from all other rows
		studentSpreadsheet.rows[i].addEventListener('click', function () {
			addSelectedClass(i),
			calculateTotalGrade(getGrade1(i), getGrade2(i), i)
		});	
	}

	function addSelectedClass (i) {
		let highlightedNodes = document.querySelectorAll(".selected");
		for (let k = 0; k < highlightedNodes.length; k++) {
			highlightedNodes[k].classList.toggle("selected");
		}
		for (let j = 0; j < cellsInEaRow; j++) {
			studentSpreadsheet.rows[i].cells[j].classList.add("selected");
		}
		console.log("row " + i + " selected");
	}

	function getGrade1 (i) {
		let homeworkGrades = studentSpreadsheet.rows[i].cells[3].innerHTML;
		return homeworkGrades;
	}

	function getGrade2 (i) {
		let testGrades = studentSpreadsheet.rows[i].cells[4].innerHTML;
		return testGrades;
	}

	function calculateTotalGrade (homework, test, row) {
		let total = (parseInt(homework) + parseInt(test)) / 2;
		console.log(parseInt(homework), parseInt(test));
		total += "%";
		studentSpreadsheet.rows[row].cells[2].innerHTML = total;
	}
	
}