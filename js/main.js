function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";

    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar() {
    //window.open("https://www.google.com.br/"); |Abre outra aba|
    window.location.href = "https://www.google.com.br/";
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("Página carregada")
}

function funcaoChange(elemento) {
    console.log(elemento.value)
}

/*
function soma(n1, n2) {
    return n1 + n2;
}


var validar = 0 |Valida|

function validaIdade(idade) {
    if (idade >= 18) {
        validar = true
    } else {
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade");
validaIdade(idade);
console.log(validar);*/

//alert(soma(5, 10));


/*var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes()); */

/*var count; |Contador|
for (count = 0; count <= 5; count++) {
    alert(count);
};*/

/*var count = 0; |Contador|
while (count <= 5) {
    console.log(count);
    alert(count);
    count++;
};*/

/*var idade = prompt("Qual é a sua idade?"); |Cria popup de pergunta|
if (idade >= 18) {
    alert("maior de idade");
} else {
    alert("menor de idade");
}*/

/*var frutas = [{ nome: "maçã", cor: "vermelha" }, { nome: "uva", cor: "roxa" }]
console.log(frutas);
alert(frutas[1].nome);*/

/*var fruta = { nome: "maçã", cor: "vermelha" }
console.log(fruta.nome);
alert(fruta.cor);*/

//var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva"); |Coloca algo na array|
//lista.pop(); |Tira o último da lista na array|

//console.log(lista); |Imprime lista no console|
//console.log(lista.toString()); |Transfroma em string|
//console.log(lista.join(" - ")) |Coloca hífen ou qualquer caractere|

//var nome = "José Williams";
//var n1 = 29;
//var n2 = 10;
//var frase = "Eu preciso de ajuda!!!"
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(n1 * n2);
//console.log(frase.toLowerCase()); |Coloca tudo em minúsculo|
//alert(frase.replace("Eu", "Você"));