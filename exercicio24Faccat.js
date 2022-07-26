let salariofixo, vendas, salariofinal




salariofixo=parseFloat(prompt("Digite o valor do seu salário fixo :"))


vendas=parseInt(prompt("Digite o valor de vendas efetuado pelo usuário :"))


if (vendas <1501) {
    salariofinal=vendas/100*3+salariofixo

    alert("O salario final corresponde a : R$" + salariofinal)
} else {

    salariofinal=(vendas-1500)*5/100 + (1500*3/100)+salariofixo

    alert("O sal�rio final do vendedor corresponde a :" + salariofinal)
    
}