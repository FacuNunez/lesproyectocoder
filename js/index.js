const productos = [
    { id: 1, nombre: "Remera Vida", precio: 3000 },
    { id: 2, nombre: "Campera Fleco", precio: 6900 },
    { id: 3, nombre: "Sweater Lara", precio: 5250 },
    { id: 4, nombre: "Remeron Animal", precio: 3000 },
    { id: 5, nombre: "Babucha", precio: 6300 },
    { id: 6, nombre: "Campera Lucia", precio: 11000 },
    { id: 7, nombre: "Saco Lila", precio: 5300 },
    { id: 8, nombre: "Sweater Vilma", precio: 4500 },
    { id: 9, nombre: "Buzo Rock", precio: 6700 },
    { id: 10, nombre: "Home Spray x 250ml", precio: 750 },
    { id: 11, nombre: "Home Spray x 750ml", precio: 1200 },
    { id: 12, nombre: "Short Dulce", precio: 1900 },
    { id: 13, nombre: "Top Bote", precio: 2500 },
    { id: 14, nombre: "Remera Rolling", precio: 3000 },
];

const compras = [];

let seleccion = prompt("Hola, somos Les Bs.As" + " ," + "empezamos : ");
if (seleccion == "si") {
    let mostrar = productos.map(
        (producto) =>
        " " + producto.id + "-" + producto.nombre + " $" + producto.precio
    );
    alert(mostrar);
} else if (seleccion == "no") {
    alert("Gracias, volve pronto! te esperamos!");
}

let eleccion = prompt("Ingresa el nombre producto seleccionado: ");
let encontrado = productos.find((prenda) => prenda.nombre === eleccion);

compras.push(`$${encontrado.precio}`);

let seguir = prompt("Desea agrera otra prenda?");
while (seguir === "si") {
    eleccion = prompt("Ingresa el nombre producto seleccionado: ");
    let encontradoDos = productos.find((item) => item.nombre === eleccion);

    compras.push(`$${encontradoDos.precio}`);

    seguir = prompt("Desea agrera otra prenda?");
}

if (seguir === "no") {
    compras.forEach((comprasFinal) => {
        alert(`total: $ ${compras.precio}`);
    });
}
