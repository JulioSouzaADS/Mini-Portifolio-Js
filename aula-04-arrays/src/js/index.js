// var listaFilme = [ "yesterday","A Chegada","Escola DO ROCK"];

// listaFilme.push ("Harry Potter 2");

// document.write("<P>" + listaFilme[0] + "<p>");
// document.write("<P>" + listaFilme[1] + "<p>");
// document.write("<P>" + listaFilme[2] + "<p>");
// document.write("<P>" + listaFilme[3] + "<p>");

// for (var indice =0; indice < listaFilme.length ; indice++) {
//     document.write("<P>" + listaFilme[indice] + "<p>");
    
// }



var listaFilmes = [ "https://cdn.myanimelist.net/images/anime/7/52011l.jpg","https://nerowallpaper.com/wp-content/uploads/2022/02/papeis-de-parede-4k-ichigo-bleach-wallpaper.jpg",
"https://www.enwallpaper.com/wp-content/uploads/2022/04/Berserk-Android-Wallpaper-4K.jpg"];


    var novoFilme = document.getElementById('botaoAdd1').value
    console.log(novoFilme.value)
    listaFilmes.push (novoFilme);

 for (i =0; i<listaFilmes.length; i++){
    document.write("<img src=" +listaFilmes[i] + ">");

 }            





