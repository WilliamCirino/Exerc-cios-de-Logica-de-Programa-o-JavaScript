let valorCarroVendido, salarioFixo, valorTotalVendas, salarioFinal, numeroCarrosVendidos


salarioFixo=parseFloat(prompt("Digite o valor do seu sal�rio fixo:"))


numeroCarrosVendidos=parseInt(prompt("Digite o n�mero de carros vendidos:"))


valorCarroVendido=parseInt(prompt("Digite o valor ganho por cada carro vendido:"))


valorTotalVendas=parseInt(prompt("Digite o valor de suas vendas mensais:"))


SalarioFinal=salarioFixo+numeroCarrosVendidos*valorCarroVendido+valorTotalVendas*5/100


alert("O salário final do vendedor é:" + salarioFinal)



Fimalgoritmo