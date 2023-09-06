document.addEventListener("DOMContentLoaded", () => {
    const contenedorchiste = document.getElementById("chiste"); //recupero el contenido donde quiero mostrar mi chiste
    const boton = document.getElementById("boton"); //recupero el contenido de mi boton 
    const URL = "https://v2.jokeapi.dev/joke/Any?type=single"; // guardo mi api en una variable
    let chiste = () => {     //guardo en una funcion mi peticion a el servidor  
    fetch(URL)  //realizo peticion con la variable que contiene mi api
    .then (data => data.json())  // parseo el contenido para poder utilizarlo como texto
    .then (item =>{
        contenedorchiste.textContent= `${item.joke}`;  // introduzco el valor de mi chiste dentro de mi contenedor 
    });
}
boton.addEventListener("click",chiste);  //agrego el evento click a mi boton , para que la funcion solo se ejecute al presionarlo

});
