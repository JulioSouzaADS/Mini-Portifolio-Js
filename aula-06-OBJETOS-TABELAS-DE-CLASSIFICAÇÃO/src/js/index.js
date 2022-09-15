var rafa = { nome : 'RNG', vitorias:2, empates:1 , derrotas:1,pontos:0 }
var paulo = {nome : '100 Tieves', vitorias:1, empates:1 ,derrotas:2,pontos:0 }
var julio = {nome : 'G2', vitorias:3, empates:0 ,derrotas:0,pontos:0 }


rafa.pontos = calculaPontos (rafa);
// o parametro jogador foi substituido por rafa para buscar a variavel desejada
paulo.pontos = calculaPontos (paulo);
// recebe o valor de pontos da funcao calculaPontos-return pontos;
julio.pontos = calculaPontos (julio);

function calculaPontos (jogador) {
    // o parametro jogador e subistituido por variaveis definidas pelo usuario
    var pontos = (jogador.vitorias *3) + jogador.empates;
   return pontos;
}// o metodo return retorna um valor para onde e chamada a funcao

console.log(rafa)
console.log(paulo)

let jogadores = [ rafa,paulo,julio];

function exibeJogadoresNaTela (jogadores) {
    let elemento = '';

    for ( i = 0; i < jogadores.length; i++){
        elemento += " <tr>  <td>"+ jogadores[i].nome + "</td>"
        elemento += " <td>"+ jogadores[i].vitorias + "</td>"
        elemento += " <td>"+ jogadores[i].empates + "</td>"
        elemento += " <td>"+ jogadores[i].derrotas + "</td>"
        elemento += " <td>"+ jogadores[i].pontos + "</td>"
        elemento += "<td><button onClick='adicionarVitoria("+ i + ")'>Vitórias</button></td>"
        elemento += "<td><button onClick='adicionarEmpate("+ i + ")'>Empates</button></td>"
        elemento += "<td><button onClick='adicionarDerrota("+ i + ")'>Derrotas</button></td>"

        elemento += " </tr>"
        
    }
    var tabelaJogadores = document.getElementById ('tabelaJogadores');
tabelaJogadores.innerHTML = elemento;

//monta a tabela de exibição para o usuario
}

exibeJogadoresNaTela(jogadores);


function adicionarVitoria(i) {
    var jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calculaPontos(jogador)
    exibeJogadoresNaTela(jogadores)
}

function adicionarEmpate(i) {
    var jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calculaPontos(jogador)
    exibeJogadoresNaTela(jogadores)
}

function adicionarDerrota(i) {
    var jogador = jogadores[i]
    jogador.derrotas++
    jogador.pontos = calculaPontos(jogador)
    exibeJogadoresNaTela(jogadores)
}

function adicionarJogadaor(i) {
    var jogador = jogadores[i]
    jogador.derrotas++
    jogador.pontos = calculaPontos(jogador)
    exibeJogadoresNaTela(jogadores)
}