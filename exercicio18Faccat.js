let AnoAtual, AnoNascimento, voto;

AnoAtual = parseInt(prompt("Digite o Ano Atual"));
AnoNascimento = parseInt(prompt("Digite o Ano de seu Nascimento"));

voto = AnoAtual - AnoNascimento

if (voto >= 16) {
    alert("Pode Votar. " + voto + " anos")
}
else {
    alert("Não Pode Votar " + voto + " anos")
}