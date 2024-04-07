export function AgregarTabla() {

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const celular = document.getElementById('celular').value;
    const direccion = document.getElementById('direccion').value;
    const email = document.getElementById('email').value;

    const tabla = document.getElementById('tabla').getElementsByTagName('tbody')[0];



    var fila = tabla.insertRow(0);

    

    var columna1 = fila.insertCell(0);
    var columna2 = fila.insertCell(1);
    var columna3 = fila.insertCell(2);
    var columna4 = fila.insertCell(3);
    var columna5 = fila.insertCell(4);

    columna1.innerText = nombre;
    columna2.innerText = apellido;
    columna3.innerText = celular;
    columna4.innerText = direccion;
    columna5.innerText = email;

}