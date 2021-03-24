//editei apenas o js para testes

var valorEmDolarTexto = prompt("Qual o valor em dolar que você quer converter?")

var valorEmDolarNumero = parseFloat(valorEmDolarTexto)

var valorEmReal = valorEmDolarNumero * 5.50
var valorEmRealFixado = valorEmReal.toFixed(2)

alert(valorEmRealFixado)

//Revisão
//variáveis var int - float - string 
//alert - jogar na tela
//parseInt - texto para inteiro
//ParseFloat - texto para real
//promt