let saldoatual, saldo, debito, credito, contacorrente





contacorrente=parseInt(prompt("Digite o número de sua conta corrente :"))



saldo=parseFloat(prompt("Digite o saldo de sua conta corrente :"))


debito=parseFloat(prompt("Digite o valor do débito de sua conta corrente :"))


credito=parseFloat(prompt("Digite o valor do crédito de sua conta corrente :"))


saldoatual= saldo - debito + credito


alert("Para a conta : " +contacorrente)


alert("O valor do saldo atual corresponde a :" + saldoatual)

if (saldoatual>=0){
    alert("Saldo Positivo")

}else {
    alert("Saldo Negativo")
}