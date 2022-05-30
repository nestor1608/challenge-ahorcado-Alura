var btnInicio = document.querySelector("#inicio");
var agregarPal = document.querySelector("#agregarPal");
var sectorBtnInicio = document.querySelector("#botonesInicio");

agregarPal.addEventListener("click",()=>{
    desaparecer()
    guardarPalabra()
})

btnInicio.addEventListener("click",()=>{
    desaparecer()
    inicioJuego()
})

function desaparecer(){
    sectorBtnInicio.classList.add("fadeOut");
}
// ----------------BTN AGREGAR NUEVA PALABRA INICIO----------
function guardarPalabra(){
    var botones = document.querySelector("#botones");
    var palAgregar = document.querySelector("#agregar");
    var info = document.querySelector("#info");
    info.classList.remove("fadeOut");
    botones.classList.remove("fadeOut");
    palAgregar.classList.remove("fadeOut");
}
// ------------ BTN INICIAR JUEGO INICIO----------------
function inicioJuego(){
    var ahorcado = document.querySelector("#ahorcado");
    ahorcado.classList.remove("fadeOut")
    var palabra = document.querySelector("#palabra")
    palabra.classList.remove("fadeOut")
    var btnJuego = document.querySelector("#botonesJuego")
    btnJuego.classList.remove("fadeOut")
    palabraSecreta();
}
// ------------------BTN NUEVO JUEGO (RECARGA)--------------------
var newJuego = document.querySelector("#new")
var denuevo = document.querySelector("#denuevo")
denuevo.addEventListener('click',()=>{
    location.reload()
})
newJuego.addEventListener("click",()=>{
    location.reload()
})
var btnCancelar= document.querySelector("#cancelar")
btnCancelar.addEventListener("click", ()=>{
    location.reload()
})

// ---------------BTN NUEVA PALABRA COMENZAR----------
var btnAgregarComenzar = document.querySelector("#guardar")

btnAgregarComenzar.addEventListener("click",()=>{
    var input =document.querySelector("#input");
    texto = input.value
    listaJuego.push(texto);
    console.log(listaJuego);
    var botones = document.querySelector("#botones");
    var palAgregar = document.querySelector("#agregar");
    var info = document.querySelector("#info");
    info.classList.add("fadeOut");
    botones.classList.add("fadeOut");
    palAgregar.classList.add("fadeOut");
    
    inicioJuego();
})
// ------------BTN DESISTIR----------
var desistir = document.querySelector("#desistir")

desistir.addEventListener("click",()=>{
    msjPerdida();
})
