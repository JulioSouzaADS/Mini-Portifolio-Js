var nome = 'Julio Souzza';
var media = 7;

var primeiroBimestre = 7
var segundoBimestre = 10
var terceiroBimestre = 10
var quartoBimestre = 5

let mediaFinal = (primeiroBimestre + segundoBimestre +terceiroBimestre+quartoBimestre) /4 
notaFixada = mediaFinal.toFixed (1)

if ( notaFixada > media) {
    window.alert( 'A media Final Do Aluno ' +nome+ ' Foi ' + mediaFinal+ 'seu Status é Aprovado')

} else {
    window.alert( 'A media Final Do Aluno ' +nome+ ' Foi ' + mediaFinal+ ' seu Status é Reprovado')

}



