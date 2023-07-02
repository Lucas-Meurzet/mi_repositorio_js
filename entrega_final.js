const divProductos = document.getElementById("productos");
const divCarrito = document.getElementById("carrito");
const btnVerCarrito = document.getElementById("btnVerCarrito");

btnVerCarrito.addEventListener("click", () => verCarrito());

const producto0 = new Producto(0, "GTX 1650", 200, "1650.png");
const producto1 = new Producto(1, "GTX 1660", 250, "1660.jpg");
const producto2 = new Producto(2, "RTX 3080 Ti", 600, "3080-Ti.jpg");
const producto3 = new Producto(3, "Logitech 203", 25, "LG-203.png");
const producto4 = new Producto(4, "Razer Viper", 35, "RYZEN VIPER.jpeg");
const producto5 = new Producto(5, "Logitech G533", 100, "LG-G533.jpg");
const producto6 = new Producto(6, "Razer Kraken", 90, "RAZER KRAKEN.jpg");

const productos = [producto0, producto1, producto2, producto3, producto4, producto5, producto6];
const arrayCarrito = [];


function cargarProductos(productosCargados) {
    for (let e of productosCargados) {
        let card = document.createElement("div");
        card.innerHTML = `
            <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="./img/${e.imagen}" alt="Nombre del producto ${e.nombre}">
            <div class="card-body">
            <h5 class="card-title">${e.nombre}</h5>
            <p class="card-text">Este producto cuesta USD$ ${e.precio}</p>
            <input type="button" class="btn btn-dark" onclick="agregarAlCarrito(${e.id})" class="btn btn-primary" value="Comprar">
            </div>
            </div>
            `;
        divProductos.append(card);
    }
}

function agregarAlCarrito(productos) {
    let productoEnCarro = arrayCarrito.find(e => e.idProducto === productos);

    if (productoEnCarro !== undefined) {
        let posicion = arrayCarrito.findIndex(elem => elem.idProducto === productoEnCarro.idProducto);
        arrayCarrito[posicion].sumaStock();
    } else {
        const alCarrito = new ObjCarrito(productos, 1);
        arrayCarrito.push(alCarrito);
    }
    console.table(arrayCarrito);
    localStorage.setItem("carrito", JSON.stringify(arrayCarrito));
}

function verCarrito() {
    let carritoLS = JSON.parse(localStorage.getItem("carrito"));

    if (carritoLS !== null) {
        divCarrito.innerHTML = '';
        for (let item of carritoLS) {
            let datosProductos = productos.find(e => e.id === item.idProducto);
            let card = document.createElement("div");
            card.innerHTML = `
                <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="./img/${datosProductos.imagen}" alt="Nombre del producto ${datosProductos.nombre}">
                <div class="card-body">
                <h5 class="card-title">Llevás ${datosProductos.nombre}</h5>
                <p class="card-text">Te estás llevando ${item.cantidad}</p>
                </div>
                </div>`;
            divCarrito.append(card);
        }
        divProductos.style.display = "none";

        let precioFinal = carritoLS.reduce((acum, item) => {
            let producto = productos.find(elem => elem.id === item.idProducto);
            return acum + (parseInt(producto.precio) * parseInt(item.cantidad));
        }, 0);

        divCarrito.innerHTML += `
            <h6> Total a pagar: USD$ ${precioFinal} </h6>
            <input type="button" class="btn btn-dark" value= "Finalizar Compra" onClick="finalizarCompra()">
            <input type="button" class="btn btn-dark" value= "Vaciar Carrito" onClick="limpiaCart()">`;

    } else {
        swal.fire({
            title: "Lo sentimos",
            text:  "No tenés productos agregados",
            icon:  "error"
        });
    }
}

function finalizarCompra() {
    localStorage.removeItem("carrito");
    Swal.fire({
        icon:  'success',
        title: 'Gracias por tu compra',
        text:  'Esperamos verte pronto',
    }).then(() => {
        location.reload();
    });
}

function limpiaCart() {
    while (arrayCarrito.length > 0) {
        arrayCarrito.pop();
    }
    Swal.fire({
        icon:  'success',
        title: 'Carro vacío',
        text:  'Esperamos verte pronto',
      });
    localStorage.removeItem("carrito");
    divCarrito.innerHTML = ``;
    divProductos.style.display = "flex";
}

function pedirProductos() {
    cargarProductos(productos);
}

document.addEventListener("DOMContentLoaded", () => {
    pedirProductos();
});  