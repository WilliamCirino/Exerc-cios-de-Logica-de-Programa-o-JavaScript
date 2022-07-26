
let totalEleitores, brancos, nulos, validos, porcentagemVotosBrancos, porcentagemVotosNulos, porcentagemVotosValidos

totalEleitores=parseInt(prompt("Digite o número total de Eleitores"))

brancos=parseInt(prompt("Digite o número total de Brancos"))
 
nulos=parseInt(prompt("Digite o número total de Nulos"))

validos=parseInt(prompt("Digite o número total de Válidos")) 
 
 porcentagemVotosBrancos=brancos/totalEleitores*100
 porcentagemVotosNulos=nulos/totalEleitores*100
 porcentagemVotosValidos=validos/totalEleitores*100
 
 alert("O valor da porcentagem de voto Brancos é: " + porcentagemVotosBrancos,"%")
 alert("O valor da porcentagem de voto Nulos é: " + porcentagemVotosNulos,"%")
 alert("O valor da porcentagem de voto Validos é: " + porcentagemVotosValidos,"%")
 
