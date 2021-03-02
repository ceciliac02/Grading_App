{
	let studentSpreadsheet = document.getElementById("spreadsheet");

	let students = ["Thorp, Mike", "Lavinsky, Molly", "Kaiser, Alan", "Brown, Patricia", "Bowers, Vivian", "Morales, Caden", "Pierce, Ryan", "Veracruz, Leticia", "Fox, Darius", "Tran, Jordan", "Juarez, Emilio", "Stone, Rebecca", "Fuentes, Marycruz"];
	
	students = students.sort();

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
	
	(function appendStudentNames () {
		for (let i = 1; i <= students.length; i++) {
			studentSpreadsheet.rows[i].cells[0].innerHTML = students[i - 1];
		}
	})();

	

	for (let i = 1; i <= students.length; i++) {
		studentSpreadsheet.rows[i].cells[0].addEventListener('click', 'tr', function () {
			tr.toggle("selected", false);
			studentSpreadsheet.rows[i].cells[0].classList.toggle("selected", true);
		});
	}
	
}