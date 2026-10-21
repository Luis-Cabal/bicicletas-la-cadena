// Variables y constantes necesarias   Controlar los filtros con los botones 
const PRODUCTOS = document.querySelectorAll(".producto");
const BTNTODOS = document.getElementById("btnTodos");
const BTNMONTANA = document.getElementById("btnMontana");
const BTNURBANA = document.getElementById("btnUrbana");
const BTNELECTRICA = document.getElementById("btnElectrica")
const listaProductos = document.querySelectorAll(".producto");

let botones = document.querySelectorAll(".filtro");



function mostrarProducto(ficha) {
    let contador = 0;

    PRODUCTOS.forEach(producto => {
        if (ficha === "todo" || producto.classList.contains(ficha)) {
            producto.style.display = "flex";
            contador++;
        } else {
            producto.style.display = "none";
        }
    }
    );
}






// Asignamos los eventos de clic a cada botón, estableciendo una función anónima para que se aplique unicamente al cliquear en el botón
BTNTODOS.addEventListener("click", function () {
    botones.forEach(filtro => filtro.style.backgroundColor = "#312117")
    botones.forEach(filtro => filtro.style.border = "1px black solid")
    botones.forEach(filtro => filtro.style.color = "white")
    mostrarProducto("todo");
    BTNTODOS.style.color = "#312117"
    BTNTODOS.style.backgroundColor = "#FFC24B";
    BTNTODOS.style.border = "2px solid #cc9830";
});

BTNMONTANA.addEventListener("click", function () {
    botones.forEach(filtro => filtro.style.backgroundColor = "#312117")
    botones.forEach(filtro => filtro.style.border = "1px black solid")
    botones.forEach(filtro => filtro.style.color = "white")
    mostrarProducto("montana");
    BTNMONTANA.style.color = "#312117"
    BTNMONTANA.style.backgroundColor = "#FFC24B";
    BTNMONTANA.style.border = "2px solid #cc9830";
});

BTNURBANA.addEventListener("click", function () {
    botones.forEach(filtro => filtro.style.backgroundColor = "#312117")
    botones.forEach(filtro => filtro.style.border = "1px black solid")
    botones.forEach(filtro => filtro.style.color = "white")
    mostrarProducto("urbana");
    BTNURBANA.style.color = "#312117"
    BTNURBANA.style.backgroundColor = "#FFC24B";
    BTNURBANA.style.border = "2px solid #cc9830";
});

BTNELECTRICA.addEventListener("click", function () {
    botones.forEach(filtro => filtro.style.backgroundColor = "#312117")
    botones.forEach(filtro => filtro.style.border = "1px black solid")
    botones.forEach(filtro => filtro.style.color = "white")
    mostrarProducto("electrica");
    BTNELECTRICA.style.color = "#312117"
    BTNELECTRICA.style.backgroundColor = "#FFC24B";
    BTNELECTRICA.style.border = "2px solid #cc9830";
});
BTNTODOS.click();

// Funcion para que las etiquetas se modifiquen desde java y no desde html
const ETIQUETAS = document.querySelectorAll(".promo");

ETIQUETAS.forEach(etiqueta => {
    etiqueta.classList.add("etiqueta-flotante");
});
