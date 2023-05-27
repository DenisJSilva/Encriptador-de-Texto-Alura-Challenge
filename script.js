var textofinal;
var textoACopiar;
function encriptar() {
    var textoentrante = document.getElementById("textoentrada").value;
    texto = textoentrante.replace(/e/gi,"enter"); //encriptamos la e
    texto = texto.replace(/i/gi,"imes"); //encriptamos la i
    texto = texto.replace(/a/gi,"ai"); //encriptamos la a
    texto = texto.replace(/o/gi,"ober"); //encriptamos la o
    textoFinal = texto.replace(/u/gi,"ufat"); //encriptamos la u
    textoACopiar = textoFinal;
    var textosalida= document.getElementById("salida").value;
    salida.value=textoFinal;
}
function desencriptar() {
    var textoentrante = document.getElementById("textoentrada").value;
    texto = textoentrante.replace(/enter/gi,"e"); //encriptamos la e
    texto = texto.replace(/imes/gi,"i"); //encriptamos la i
    texto = texto.replace(/ai/gi,"a"); //encriptamos la a
    texto = texto.replace(/ober/gi,"o"); //encriptamos la o
    textoFinal = texto.replace(/ufat/gi,"u"); //encriptamos la u
    textoACopiar = textoFinal;
    var textosalida= document.getElementById("salida").value;
    salida.value=textoFinal;
}


function copiar() {
    navigator.clipboard.writeText(textoACopiar)
}