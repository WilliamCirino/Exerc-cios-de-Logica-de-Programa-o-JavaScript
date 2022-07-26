let macas,Quantidade;

Quantidade=parseFloat(prompt("Digite a Quantidade de maças compradas"));



if (Quantidade<=12) {
        macas= 1.3*Quantidade;
        alert("O Custo total com a(s): "+ Quantidade + " maças" + " é de R$ " + macas);
}
 else {
    macas = 1*Quantidade;
    alert("O Custo total com a(s): " + Quantidade + " maças" + " é de R$ " + macas);
}