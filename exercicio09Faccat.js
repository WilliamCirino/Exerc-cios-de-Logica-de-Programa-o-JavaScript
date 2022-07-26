let salarioAtual, reajuste, salarioNovo, salarioFinal



salarioAtual=parseFloat(prompt("Digite o seu salário atual: "))
reajuste=parseFloat(prompt("Digite o seu percentual de reajuste: "))

salarioNovo=salarioAtual/100*reajuste
salarioFinal=salarioAtual+salarioNovo

alert("O valor da do salário Atual é: "+salarioFinal)
