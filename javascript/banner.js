/* Banner */
var contadorimg = 0;

function animaciones() {
    document.getElementById("banner").style.opacity="0";
    document.getElementById("banner").style.transition="all 1s";
    setTimeout("carrusel()",1000);
}

function carrusel() {
    contadorimg++;
    if(contadorimg>5) contadorimg = 1;
    document.getElementById("banner").setAttribute("src","../imagenes/banner"+contadorimg+".jpg");
    document.getElementById("banner").style.opacity="2";
    document.getElementById("banner").style.transition="all 5s";
    setTimeout("animaciones()",5000);
}

document.body.setAttribute("onload","carrusel()");