var num1 = parseInt(prompt("Informe o primeiro numero: "));
var num2 = parseInt(prompt("Informe o segundo numero: "));

var multiplos = num1 % num2;

if (multiplos == 0) {
  alert("Os numeros " + num1 + " e " + num2 + " são multiplos um do outro.");
} else {
  alert(
    "Os numeros " + num1 + " e " + num2 + " não são multiplos um do outro."
  );
}
