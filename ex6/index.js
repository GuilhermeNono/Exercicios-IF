//Desenvolva um algoritmo que leia 3 valores inteiros e os apresente em ordem crescente.

var num1 = parseInt(prompt("Informe o primeiro numero: "))
var num2 = parseInt(prompt("Informe o segundo numero: "))
var num3 = parseInt(prompt("Informe o terceiro numero: "))

if(num1 > num2 && num1 > num3){
    if(num2 > num3){
        alert(`Os numeros em ordem crescente são: ${num3}, ${num2}, ${num1}`)
    } else {
        alert(`Os numeros em ordem crescente são: ${num2}, ${num3}, ${num1}`)
    }
} else if(num2 > num1 && num2 > num3){
    if(num1 > num3){
        alert(`Os numeros em ordem crescente são: ${num3}, ${num1}, ${num2}`)
    } else {
        alert(`Os numeros em ordem crescente são: ${num1}, ${num3}, ${num2}`)
    }
} else {
    if(num1 > num2){
        alert(`Os numeros em ordem crescente são: ${num2}, ${num1}, ${num3}`)
    } else {
        alert(`Os numeros em ordem crescente são: ${num1}, ${num2}, ${num3}`)
    }
}
