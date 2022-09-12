function adicionarFilme() {
    let campoFilmeFavorito = document.getElementById ('filme').value;
    if ( campoFilmeFavorito.endsWith(".jpg") || campoFilmeFavorito.endsWith(".png") ) {
        listarFilmesNaTela(campoFilmeFavorito);
    } else {
        console.error (" Endereço De Anime Invalido ")
    }
    document.getElementById ('filme').value ="";
}
// a variavel do parametro listarFilmesNaTela(campoFilmeFavorito) esta ficando no lugar da original oferecendo o seuu valor a mesma 
// endsWith serve para ver o final de um arquivo sua tradução seria ex "termina Com" ."jpg" " 

function listarFilmesNaTela(filme) {
    var elementoFilmeFavorito = "<img src=" + filme + ">";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML += elementoFilmeFavorito;
}

//neste exemplo o parametro "filme" tomou o lugar do elemento campoFilmeFavorito que esta
// referenciado na primeira funcao

function removerFilme() {
    var elementoRequerido = document.getElementById('listaFilmes').value
        for ( i=0; i > elementoRequerido.length; i++) {
            console.log (elementoRequerido)
        }
}

