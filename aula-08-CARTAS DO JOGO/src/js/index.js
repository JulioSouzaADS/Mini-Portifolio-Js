let carta1 = {nome:'Vayne' ,
              imagem:'https://alamedageek.com.br/wp-content/uploads/2018/04/quadro-canvas-vayne1-lol.jpg',
                atributos: { ataque:80, defesa : 20,vda:4,Critico:20}};
let carta2 = {nome:'Caitlyn',
              imagem:'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_30.jpg',
                atributos: {ataque:95, defesa:15,vda:2,Critico:100}} ;
let carta3 = {nome:'Kalista',
              imagem:'https://images2.alphacoders.com/648/648860.jpg',
                atributos: { ataque:100, defesa:10,vda:3,Critico:50} } ;

let cartas = [ carta1,carta2,carta3];
let cartaMaquina
let cartaJogador

function sortearCarta(){
    let numeroCartaMaquina = parseInt (Math.random() * 3);
        cartaMaquina = cartas[numeroCartaMaquina];
    // numeroCartaMaquina e o indice e cartas a variavel com arrays 
        console.table (cartaMaquina)
  
    
    let numeroCartaJogador = parseInt (Math.random() * 3);
        while (numeroCartaMaquina == numeroCartaJogador) {
            numeroCartaJogador = parseInt (Math.random() * 3);
        }
        cartaJogador = cartas[numeroCartaJogador];
        console.table (cartaJogador);
        document.getElementById('btnSortear').disabled = true;
        document.getElementById('btnJogar').disabled = false;
        exibirCartaJogador();
        // exibirOpcoes() 
     

}

// function exibirOpcoes() {
//     let opcoes = document.getElementById('opcoes');
//     console.log (opcoes)
//     let opcoesTexto = ""
//         for (let atributo in cartaJogador.atributos) {
//             opcoesTexto += "<input type='radio' name='atributo' value='" + atributo +"'>" + atributo;
//         }
//         opcoes.innerHTML = opcoesTexto;
// }

function obtemAtributoSelecionado () {
    let radioAtributos = document.getElementsByName('atributo');
        for ( i=0; i < radioAtributos.length; i++){
            if ( radioAtributos[i].checked == true) {
                return radioAtributos[i].value
            }
        }

}

function jogar () {
    let atributoSelecionado = obtemAtributoSelecionado();
    let elementoResultado = document.getElementById ('resultado')
    let valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
    let valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]

        if ( valorCartaJogador > valorCartaMaquina) {
            elementoResultado.innerHTML = ' Voce Venceu ! Parabéns'
        } else if (valorCartaMaquina > valorCartaJogador) {
                elementoResultado.innerHTML = ' Voçê perdeu para Um bot ! Parabéns'
        } else {
            elementoResultado.innerHTML = ' Voçê conseguiu empatar com um Bot ! Parabéns'
        }
    console.log(atributoSelecionado)
 
}

function exibirCartaJogador () {
    let divCartaJogador = document.getElementById ('carta-jogador');
        divCartaJogador.style.backgroundImage = ` url ( ${ cartaJogador.imagem}) `
        let moldura = '<img src= "https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
        let tagHtml = "<div id='opcoes' class='carta-status'> "

        let opcoesTexto = ""
        for (let atributo in cartaJogador.atributos) {
            opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"; 
                            // `<input type='radio' name='atributo' value= '${atributo}'>  `
        }

        let nome = ` <p class'carta-subtitle'> ${cartaJogador.nome} </p>`
        divCartaJogador.innerHTML = moldura + nome + tagHtml+opcoesTexto + "</div">
}
