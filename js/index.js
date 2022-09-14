
let total = 0;
let producto = 0;
let contador = 0;
let porcentaje = 20

function ingresarValor() {
    producto = Number(prompt("Ingrese el valor del producto" + (contador + 1)));
    while (producto > 0) {
        total = calcularTotal(producto);
        contador++;
        producto = Number(prompt("Ingrese el valor del producto" + (contador + 1)));
    }

}

function calcularTotal(producto) {
    return total + producto;
}

function mostrarTotal() {
    alert("Subtotal $" + total);
}

ingresarValor();
mostrarTotal();

despedida = prompt("desea agregar algun producto mas?");
if (despedida === "no") {
    alert("gracias por su compra");
}else{
    alert("que mas quiere agregar")
}

