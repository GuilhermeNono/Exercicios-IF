var ano = parseInt(prompt("Informe o ano: "));

var anoBissexto = ano % 4;

if (anoBissexto == 0) {
  alert("Ano bissexto");
} else {
  alert("Ano não bissexto");
}
