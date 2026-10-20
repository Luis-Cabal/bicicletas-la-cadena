//TRABAJO REALIZADO POR ELI

//Controlar las opciones a marcar en la selección única del formulario

 // 1. Seleccionamos el formulario por su ID
  let formulario = document.getElementById('miFormulario');


 // 2. Escucha cuando haces clic en "Limpiar"
let botonLimpiar = document.getElementById('btnLimpiar');
// Cuando haces clic en el botón, se desmarcan todos los radios para volver a empezar
botonLimpiar.addEventListener('click', () => {
  formulario.reset(); 
});

// 3. Crear una función evento para el botón Submit - Enviar Formulario
//En JavaScript, .value sirve para obtener el valor que una persona ha escrito o seleccionado en un campo del formulario.
let boton = document.querySelector(".btnFormulario");
boton.addEventListener("mousedown", function() {

  //Por eso .value obtiene el valor de los campos que recoge el formulario en este caso el Label
    let nombre = document.getElementById("nombre").value;
    let direccion = document.getElementById("direccion").value;
    let correo = document.getElementById("correo").value;
    let telefono = document.getElementById("telefono").value;

//Esta línea comprueba que los cuatro campos del formulario estén rellenados antes de continuar.
//He utilizado la condicional IF conteniendo dos Else que significa sino haz esto.
     if (nombre != "" && direccion != "" && correo != "" && telefono != "") {

        alert("El formulario ha sido enviado correctamente");

    } else {
        alert("Debes completar todos los campos obligatorios");

    }

});

