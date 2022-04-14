//Elabore um algoritme que leia o ano de nascimento do usuário e informe se ele pode ou não votar. Faça uma pesquisa para descobrir os limites de idades em que o voto deve ser proibido, obrigatório ou facultativo.

var anonNascimento = parseInt(prompt("Informe o ano do seu nascimento: "))

var idade = 2022 - anonNascimento;

if (idade >= 18 && idade <= 69) {
    //Obrigatorio
    alert("Obrigatorio")
} else if (idade <= 15) {
    //Oroibido    
    alert("Proibido")
} else if ((idade >= 16 && idade <= 17) || idade >= 70) {
    //Facultativo
    alert("Facultativo")
}