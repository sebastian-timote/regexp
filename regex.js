var busqueda = "mi nombre es sebas"; 
var n = busqueda.search(/nombre/i);
console.log(n);

var patt = /e/;
console.log(patt.test("The best things in life are free!"));

var reemplazar = "disciplina vencera la inteligencia";
var res = reemplazar.replace("la inteligencia", "el talento");
console.log(res);