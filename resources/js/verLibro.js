//Variables
let comentario;

const enviarComentario = () =>{
    //Creamos la Fila
    let fila = document.createElement("div");
    fila.setAttribute("class", "row");
    //Creamos la columna
    let columna = document.createElement("div");
    columna.setAttribute("class", "col-xs-8 col-xs-offset-3");
    //Creamos la media
    let media = document.createElement("div");
    media.setAttribute("class", "media");
    //Creamos la parte izq
    let mediaLeft = document.createElement("div");
    mediaLeft.setAttribute("class", "media-left");
    //Creamos la a
    let a = document.createElement("a");
    a.setAttribute("href","#");
    //Creamos la img
    let img = document.createElement("img");
    img.setAttribute("class","img-responsive");
    img.setAttribute("src", "./resources/images/profile.png");
    //Creamos la el body
    let mediaBody = document.createElement("div");
    mediaBody.setAttribute("class", "media-body");
    //Creamos thumbnail
    let thumbnail = document.createElement("div");
    thumbnail.setAttribute("class", "thumbnail");
    //Creamos la P
    let p = document.createElement("p");
    //Creamos el texto
    let cadena = comentario.value;
    let texto = document.createTextNode(cadena);
    //texto dentro de p
    p.appendChild(texto);
    // p dentro de thumbnail
    thumbnail.appendChild(p);
    // thumbnail dentro de mediaBody
    mediaBody.appendChild(thumbnail);
    // img dentro de a
    a.appendChild(img);
    // a dentro de mediaLeft
    mediaLeft.appendChild(a);
    // mediaLeft dentro de media
    media.appendChild(mediaLeft);
    // mediaBody dentro de media
    media.appendChild(mediaBody);
    // media dentro de columna
    columna.appendChild(media);
    // columna dentro de fila
    fila.appendChild(columna);
    let papiDePapis = comentario.parentNode.parentNode.parentNode;
    let ultimoHijo = papiDePapis.lastChild;
    papiDePapis.insertBefore(fila, ultimoHijo.previousSibling.previousSibling.previousSibling);
    let regla = document.createElement('hr');
    papiDePapis.insertBefore(regla, ultimoHijo.previousSibling.previousSibling.previousSibling);
    comentario.value = "";
}