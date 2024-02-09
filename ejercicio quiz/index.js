const studentGrades = [100, 50, 65, 70, 85, 96, 45];

const computeGrades = (arreglo) => {
	arreglo.forEach((nota) => {
		if (nota > 90) {
			nota = 'A';
		}
		if (nota > 80) {
			nota = 'B';
		}
		if (nota > 70) {
			nota = 'C';
		}
		if (nota > 60) {
			nota = 'D';
		} else {
			nota = 'F';
		}
	});
	return result;
};

const result = computeGrades(studentGrades);
console.log(result);
