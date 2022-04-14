/**
   10) Um banco concederá um crédito especial aos seus clientes, variável com o saldo médio no último ano. Faça um algoritmo que leia o saldo médio de um cliente e calcule o valor do crédito de acordo com a tabela abaixo. Mostre uma mensagem informando o saldo médio e o valor do crédito.
   De 0 a 200   --> Nenhum crédito
   De 201 a 400 --> 20% do valor do saldo médio
   De 401 a 600 --> 30% do valor do saldo médio
   Acima de 601 --> 40% do valor do saldo médio
 */

var saldoMedio = parseFloat(prompt("Informe seu saldo Medio: "))

if(saldoMedio <= 200) {

    alert("O saldo medio do usuario é de R$" + saldoMedio + " e o usuario não possui valor de credito." )

} else if(saldoMedio >= 201 && saldoMedio <= 400) {

    var valorCredito = (saldoMedio * 0.2).toFixed(2)
    alert("O saldo medio do usuario é de R$" + saldoMedio + " e o usuario possui R$" + valorCredito + " de valor de credito." )

} else if(saldoMedio >= 401 && saldoMedio <= 600) {

    var valorCredito1 = (saldoMedio * 0.3).toFixed(2)
    alert("O saldo medio do usuario é de R$" + saldoMedio + " e o usuario possui R$" + valorCredito1 + " de valor de credito." )

} else {

    var valorCredito2 = (saldoMedio * 0.4).toFixed(2)
    alert("O saldo medio do usuario é de R$" + saldoMedio + " e o usuario possui R$" + valorCredito2 + " de valor de credito." )

}
