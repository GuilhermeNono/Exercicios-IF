var num1 = parseInt(prompt("Informe o primeiro numero: "));
var num2 = parseInt(prompt("Informe o segundo numero: "));
var num3 = parseInt(prompt("Informe o terceiro numero: "));

if (num1 > num2 && num1 > num3) {
  alert("O maior numero é " + num1);
} else if (num2 > num1 && num2 > num3) {
  alert("O maior numero é " + num2);
} else if (num3 > num1 && num3 > num2) {
  alert("O maior numero é " + num3);
}
