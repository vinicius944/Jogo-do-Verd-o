var ponto_atual = 10
function verificar_respostas1(){
    let resposta1 = document.getElementById("1primeira_alternativa").checked
    if (resposta1 == true){
        document.getElementById("saida_pergunta1").textContent = "Palmeiras"
        document.getElementById("saida_pontuação").textContent = ponto_atual
        ponto_atual = ponto_atual + 10
    }else{
        document.getElementById("saida_pergunta1").textContent = "Você errou,os cara é freguês   "
    }
}
var ponto_atual = 10
function verificar_respostas2(){
    let resposta2 = document.getElementById("2primeira_alternativa").checked
    if (resposta2 == true){
        document.getElementById("saida_pergunta2").textContent = "Empate"
        document.getElementById("saida_pontuação").textContent = ponto_atual
        ponto_atual = ponto_atual + 10
    }else{
        document.getElementById("saida_pergunta2").textContent = "Empate,por enquanto"
    }
}
var ponto_atual = 10
function verificar_respostas3(){
    let resposta3 = document.getElementById("3primeira_alternativa").checked
    if (resposta3 == true){
        document.getElementById("saida_pergunta3").textContent = "palmeira"
        document.getElementById("saida_pontuação").textContent = ponto_atual
        ponto_atual = ponto_atual + 10
    }else{
        document.getElementById("saida_pergunta3").textContent = "Você,errou "
    }  
}