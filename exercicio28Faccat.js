// Ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles

let valor1, valor2, valor3

valor1=parseInt(prompt("Digite o primeiro número: "))

valor2=parseInt(prompt("Digite o segundo número: "))

valor3=parseInt(prompt("Digite o terceiro número: "))

if (valor1>valor2 && valor1>valor3);{
    alert("o maior valor digitado é: "+valor1)
}

if (valor2>valor3 && valor2>valor1){
  alert("o maior valor digitado é: "+valor2) 
} 

 if (valor3>valor2 && valor3>valor1);{
    alert("o maior valor digitado é: "+valor3)
 }
        
