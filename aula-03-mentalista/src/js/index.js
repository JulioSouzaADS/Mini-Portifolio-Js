var numeroSecreto = parseInt(Math.random() * 11);
//serve para gerar um numero aleatorio de 0 a 10
var tentativas = 0

function Chutar() {
    var elementoResultado = document.getElementById ('resultado') 
    var chute = parseInt (document.getElementById("valor").value)
    console.log(chute);

    if (chute > 10 || chute < 0 ) {
        elementoResultado.innerHTML = "voce deve digitar apenas numeros de 0 a 10";
    } else if
     (chute === numeroSecreto) {
        elementoResultado.innerHTML = "Voce acertou o Numero Secreto Parabéns!";
    } else if (chute   > numeroSecreto){
        elementoResultado.innerHTML = " Infelizmente Voçê errou onumero secreto !!! no momento ele e menor q " + chute;
    } else if (chute   < numeroSecreto){
        elementoResultado.innerHTML = " Infelizmente Voçê errou onumero secreto !!! no momento ele e maior q " + chute;
    }
        tentativas++
            if (tentativas >= 3) {
                elementoResultado.innerHTML = " Suas Tentativas Esgotaram o numero Secreto era " +numeroSecreto + "!!! ";
            }
   

}