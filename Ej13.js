// Concepto: .some() comprueba si al menos uno cumple; .every() si todos cumplen.
const calificaciones = [73, 92, 80, 95];
const todosAprobados = calificaciones.every(n => n >= 70);  // true (todos estan activos)
const algunSobresaliente = calificaciones.some(n => n >= 90); // true (solamente uno o al menos uno)
console.log(todosAprobados, algunSobresaliente);
