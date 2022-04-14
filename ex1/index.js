var nota1 = parseFloat(prompt("informe sua primera nota"));
var nota2 = parseFloat(prompt("informe sua segunda nota"));
var nota3 = parseFloat(prompt("informe sua terceira nota"));

var media = nota1 * 0.4 + nota2 * 0.3 + nota3 * 0.3;

if (media >= 7) {
  alert("Aprovado");
} else if (media > 5 && media < 7) {
  alert("Recuperação");
} else {
  alert("Reprovado");
}
