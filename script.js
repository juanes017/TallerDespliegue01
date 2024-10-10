document.getElementById("botonDesplegarTabla1").addEventListener("click", function() {  /* esto es para las tablas*/
    const contenedorTabla1 = document.getElementById("contenedorTabla1");
    contenedorTabla1.classList.toggle("mostrar");
});

document.getElementById("botonDesplegarTabla2").addEventListener("click", function() {
    const contenedorTabla2 = document.getElementById("contenedorTabla2");
    contenedorTabla2.classList.toggle("mostrar");
});

document.getElementById("botonDesplegarTabla3").addEventListener("click", function() {
    const contenedorTabla3 = document.getElementById("contenedorTabla3");
    contenedorTabla3.classList.toggle("mostrar");
});

document.getElementById("botonDesplegarTabla4").addEventListener("click", function() {
    const contenedorTabla4 = document.getElementById("contenedorTabla4");
    contenedorTabla4.classList.toggle("mostrar");
});

document.getElementById("botonDesplegarTabla5").addEventListener("click", function() {
    const contenedorTabla5 = document.getElementById("contenedorTabla5");
    contenedorTabla5.classList.toggle("mostrar");
});

document.getElementById("botonDesplegarTabla6").addEventListener("click", function() {
    const contenedorTabla5 = document.getElementById("contenedorTabla6");
    contenedorTabla5.classList.toggle("mostrar");
});

function formulario(nombreGrupo) {
    document.getElementById('nombre-grupo').innerText = nombreGrupo;
    
    const formularioSection = document.getElementById('formulario');
    formularioSection.scrollIntoView({ behavior: 'smooth' });
}

function validarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;

    if (!nombre || !email || !telefono) {
        alert("Por favor, complete todos los campos.");
        return false;
    }

    const telefonoValidar = /^[0-9]+$/; 
    if (!telefonoValidar.test(telefono)) {
        alert("El número de teléfono solo debe contener dígitos.");
        return false;
    }

    alert("Formulario enviado correctamente.");
    return true;
}

function limpiarFormulario() {
    document.getElementById('inscripcionForm').reset(); 

}