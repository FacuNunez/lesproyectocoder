//DOM

let contenedor = document.getElementById("contenedor");

const productos = [
    { id: 1, nombre: "Remera Vida", precio: 3000,},
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

//render

productos.forEach(producto => {
    let muestra = document.createElement("div")
    muestra.innerHTML = `
    <div class="card p1" style="width: 13rem;">
                <div class="card-body">
                    <h3 class="card-title">${producto.nombre}</h3>
                    <h4 class="card-title">${producto.precio}</h4>
                    <p class="card-text">${producto.id}</p>
                    <a href="https://lesbuenosaires.empretienda.com.ar/remeras/remera-vida" target="_blank"
                        class="btn btn-dark">Ir a tienda</a>
                </div>
    </div>`

    contenedor.append(muestra)
})

let contenedor2 = document.getElementById("contenedor");

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    contenedor2.innerHTML = "";
    let inputs = e.target.children;

    let producto = productos.find((item) => item.nombre === inputs[0].value);
    let div = document.createElement("div");
        div.innerHTML = `
        <div class="card p1" style="width: 13rem;">
            <div class="card-body">
                <h3 class="card-title">${producto.nombre}</h3>
                <h4 class="card-title">${producto.precio}</h4>
            </div>
        </div>`;

    contenedor2.append(div)
});