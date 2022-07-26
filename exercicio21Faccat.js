let  comeco, final, duracao

comeco=parseInt(prompt("Digite a hora do começo da partida"))
  
final=parseInt=(prompt("Digite a hora do final da partida"))

   duracao=final-comeco
   if (duracao<0){
    duracao=duracao+24
    alert ("O tempo total de duração da partida é de: " + duracao)
   } else {
    alert("O tempo total de duração da partida é de: "+ duracao)
   }
    