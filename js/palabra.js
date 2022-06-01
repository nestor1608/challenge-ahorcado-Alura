function agregarPalabra(event,palabra){
    var str = document.querySelectorAll(".str");
    if (event.code.includes("Key")){
        var key = event.key.toUpperCase();
        if(palabra.includes(key)){
            for(var i = 0; i < str.length; i++){
                letra = str[i].textContent;
                if (letra == key ){
                    str[i].classList.remove("str");
                    msjGanado()
                }
            }
        }else{
            errorPalabra(key);
            mostrarAhorcado();
        }
    }else{
        alert("asegurese de precionar letras")
    }
}
// ---------IR MOSTRANDO EL AHORCADO MIENTRAS VA ERRANDO------
function mostrarAhorcado (){
    var imagenes = document.querySelectorAll(".fadeOutImg");
    console.log(imagenes)
    if(imagenes.length >= 1){
        imagenes[0].classList.remove("fadeOutImg")
    }else{
        msjPerdida();
        
        console.log("Ah perdido.. Intentelo nuevamente")
    }
    
}

// --------------------------APARECER MSJ PERDIDO O GANADO--------

function msjGanado(){
    var msjGanado = document.querySelectorAll(".str")
    if (msjGanado.length == 0 ){
        ahorcado = document.querySelector("#ahorcado").classList.add("fadeOut");
        palabra = document.querySelector("#palabra").classList.add("fadeOut");
        ganado = document.querySelector("#finJuegoG").classList.remove("fadeOut")
        btnjuego= document.querySelector("#botonesJuego").classList.add("fadeOut");
        btnDeNuevo =document.querySelector("#denuevo").classList.remove("fadeOut");
    }
    }

function msjPerdida(){
    var ahorcado = document.querySelector("#ahorcado");
    ahorcado.classList.add("fadeOut");
    var palabra = document.querySelector("#palabra");
    palabra.classList.add("fadeOut");
    var msjPerdido = document.querySelector("#finJuegoP");
    msjPerdido.classList.remove("fadeOut");
    var btnjuego= document.querySelector("#botonesJuego");
    btnjuego.classList.add("fadeOut");
    var btnDeNuevo =document.querySelector("#denuevo");
    btnDeNuevo.classList.remove("fadeOut");

}
// -----------------LISTA PALABRAS ERRADAS---------------------------
var letraErradas= []

function errorPalabra(letra){
    var div = document.querySelector("#cadena");
    if(letraErradas.includes(letra)){
        letraErradas.push(letra);
    }else{
        letraErradas.push(letra);
        var cadena = document.createElement("p");
        cadena.classList.add("erro");
        cadena.textContent = letra;
        div.appendChild(cadena);
    }
}


