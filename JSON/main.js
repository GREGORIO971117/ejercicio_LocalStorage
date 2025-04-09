
let encabezado=document.getElementsByTagName("h1").item(0);

function guardar() {
    let emailElement = document.getElementById("email");
    let nombreElement = document.getElementById("nombre");
        localStorage.setItem("email", emailElement.value);
        localStorage.setItem("nombre", nombreElement.value);
        encabezado.innerText = `Bienvenido, ${localStorage.getItem("nombre")} tu correo es ${localStorage.getItem("email")}`; 
}

function eliminar() {
    localStorage.removeItem("email");
    localStorage.removeItem("nombre");
    encabezado.innerText = `Datos eliminados del almacenamiento.`;
}