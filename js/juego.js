
var listaJuego = ["cenicero","semaforo","computadora","amarillo","alura","oracle"]

function palabraSecreta(){
    var eleccion = listaJuego[Math.round(Math.random()*(listaJuego.length-1))].toUpperCase() 
    var ul = document.querySelector("#correctPalabra")
    for(var i = 0; i < eleccion.length; i++){
        var li = document.createElement("li");
        li.classList.add("str")
        li.textContent = eleccion[i]
        ul.appendChild(li); 
        
    }
    document.addEventListener('keypress',(e)=>{
        agregarPalabra(e,eleccion);
    });
    
}

// --------------IMPEDIR SELECCION DE TEXTO --------
function disableselect(e){
    return false
}
function reEnable(){
    return true
}
document.onselectstart=new Function ("return false")
if (window.sidebar){
    document.onmousedown=disableselect
    document.onclick=reEnable
}
