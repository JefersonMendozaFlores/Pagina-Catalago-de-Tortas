/* Formulario: Envianos un mensaje */
function validar(frm) {

    /* Validación de Nombres y apellidos */
    test = /^\s*$/;
    if(test.test(frm.txtnombre.value)) {
        window.event.preventDefault();
        alert("Estimado cliente, si nos quiere enviar un mensaje, por favor llene el formulario empezando por los Nombres y apellidos."); return;
    }

    /* Validación del Correo electrónico */
    test = /^([a-zA-Z0-9])+[@]([a-z])+[.][a-z]{2,3}$/;
    if(!test.test(frm.txtcorreo.value)) {
        window.event.preventDefault();
        alert("Por favor estimado cliente, ingrese correctamente su Correo electrónico."); return;
    }

    /* Validación del Mensaje */
    test = /^\s*$/;
    if(test.test(frm.txtmensaje.value)){
        window.event.preventDefault();
        alert("Por favor estimado cliente, ingrese el Mensaje que nos quiere proporcionar."); return;
    }

    /* Datos completos */
    alert("Estimado cliente usted ha llenado correctamente el formulario, por lo tanto sus datos se han enviado con éxito, gracias por el mensaje.")
}

/* Formulario: Finalizar Compra */
function validarCompra(frm){

    /* Validación del Nombre*/
    test = /^\s*$/;
    if(test.test(frm.txtnombre.value)) {
        window.event.preventDefault();
        alert("Estimado cliente para finalizar la compra, por favor empiece llenando este formulario por el Nombre."); return;
    }

    /* Validación del Apellido*/
    test = /^\s*$/;
    if(test.test(frm.txtapellido.value)) {
        window.event.preventDefault();
        alert("Por favor estimado cliente, ingrese su Apellido."); return;
    }

    /* Validación de la Dirección de la calle*/
    test = /^\s*$/;
    if(test.test(frm.txtdireccion.value)) {
        window.event.preventDefault();
        alert("Por favor estimado cliente, ingrese su Dirección de la calle."); return;
    }

    /* Validación del Teléfono*/
    test = /^[2-9][0-9]{7,9}$/;
    if(!test.test(frm.txttelefono.value)) {
        window.event.preventDefault();
        alert("Por favor estimado cliente, ingrese correctamente su Teléfono."); return;
    }

    /* Validación del Correo electrónico */
    test = /^([a-zA-Z0-9])+[@]([a-z])+[.][a-z]{2,3}$/;
    if(!test.test(frm.txtcorreo.value)) {
        window.event.preventDefault();
        alert("Por favor estimado cliente, ingrese correctamente su Correo electrónico."); return;
    }

    /* Datos Completos */
    alert("Estimado cliente usted ha llenado correctamente este formulario, por lo tanto todos los datos se han enviado con éxito, gracias y disfrute su compra. Su pedido llegará en unos días.");
}

/* Solo permitir letras en Nombre, Apellidos */
document.querySelector("input[name='txtnombre']").addEventListener("keypress", function(event){
    var ascii = event.keyCode || event.which; 
    if(ascii>=48 && ascii<=57){
        window.event.preventDefault();
        alert("Por favor estimado cliente, solo ingresar letras.");
        return;
    } 
});

document.querySelector("input[name='txtapellido']").addEventListener("keypress", function(event){
    var ascii = event.keyCode || event.which; 
    if(ascii>=48 && ascii<=57){
        window.event.preventDefault();
        alert("Por favor estimado cliente, solo ingresar letras.");
        return;
    } 
});

/* Solo permitir números en Teléfono */
document.querySelector("input[name='txttelefono']").addEventListener("keypress",function(event){
    var ascii = event.keyCode || event.which;  
    if(ascii<48 || ascii>57){
        window.event.preventDefault();
        alert("Por favor estimado cliente, solo ingresar números.");
        return;
    }
});

/* Solo permitir letras en Nombre del cumpleañero */
document.querySelector("input[name='txtnombrecumpl']").addEventListener("keypress", function(event){
    var ascii = event.keyCode || event.which; 
    if(ascii>=48 && ascii<=57){
        window.event.preventDefault();
        alert("Por favor estimado cliente, solo ingresar letras.");
        return;
    } 
});

/* Solo permitir números en Edad del cumpleañero */
document.querySelector("input[name='txtedad']").addEventListener("keypress",function(event){
    var ascii = event.keyCode || event.which;  
    if(ascii<48 || ascii>57){
        window.event.preventDefault();
        alert("Por favor estimado cliente, solo ingresar números.");
        return;
    }
});
