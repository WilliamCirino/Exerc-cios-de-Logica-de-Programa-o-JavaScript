let atual, maxima, minima, quantidademedia
   

atual=parseFloat(prompt("Qual a quantidade atual do estoque: "))

maxima=parseInt(prompt("Qual a quantidade m�xima do estoque: "))

minima=parseInt(prompt("Qual a quantidade m�nima do estoque: "))

   quantidademedia= (maxima+minima)/2

   if (atual>=quantidademedia){
    alert("Não efetuar compra")
   } else{
    alert("Efetuar Compra")
   }
    
  