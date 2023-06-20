const Productos = [
    
    { nombre: '1650 Super', precio: 200, url:"https://asset.msi.com/resize/image/global/product/product_10_20191029131030_5db7c9c6b9a7a.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png", cantidad: 1 },

    { nombre: '1660 Super ', precio: 250, url: "https://static.gigabyte.com/StaticFile/Image/Global/caedb198cc1fba302b169b29a9959aa2/Product/23929/webp/1000", cantidad: 1 },

    { nombre: '3060 TI', precio: 450, url:"https://m.media-amazon.com/images/I/818JWCrFAKL._AC_SL1500_.jpg", cantidad: 1 },

    { nombre: '3080 TI', precio: 650, url:"https://mgrtechno.com.ar/200-large_default/msi-geforce-rtx-3080-ti-suprim-x-12g.jpg", cantidad: 1 },

    { nombre: '3090 TI', precio: 900, url:"https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1000/https://www.comeros.com.ar/wp-content/uploads/2022/04/24G-P5-4985-KR_XL_1-1000x1000.png", cantidad: 1 },

];

const articulos = document.getElementById("articulos");
const carritoHTML = document.getElementById("carrito");
let carrito = [];

const guardarCarritoEnLocalStorage = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};

const obtenerCarritoDeLocalStorage = () => {
    const carritoGuardado = localStorage.getItem("carrito");
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
    }
};

const actualizarCarrito = () => {
    carritoHTML.innerHTML = "";
    carrito.forEach((producto) => {
        const contenedor = document.createElement("div");
        contenedor.classList.add("producto");

        const nombre = document.createElement("h2");
        nombre.textContent = producto.nombre;

        const precio = document.createElement("p");
        precio.innerText = producto.precio;

        const cantidad = document.createElement("p");
        cantidad.innerText = producto.cantidad;

        const boton = document.createElement("button");
        boton.textContent = "Eliminar";
        boton.addEventListener("click", () => {
            eliminarDelCarrito(producto);
        });

        contenedor.appendChild(nombre);
        contenedor.appendChild(precio);
        contenedor.appendChild(cantidad);
        contenedor.appendChild(boton);

        carritoHTML.appendChild(contenedor);
    });
};

const agregarAlCarrito = (producto) => {
    if (carrito.includes(producto)) {
        producto.cantidad++;
    } else {
        carrito.push(producto);
    }

    actualizarCarrito();
    guardarCarritoEnLocalStorage();
};

const eliminarDelCarrito = (producto) => {
    if (producto.cantidad > 1) {
        producto.cantidad--;
    } else {
        const index = carrito.indexOf(producto);
        carrito.splice(index, 1);
    }

    actualizarCarrito();
    guardarCarritoEnLocalStorage();
};

const articulosCards = (producto) => {
    const contenedor = document.createElement("div");
    contenedor.classList.add("card");

    const img = document.createElement("img");
    img.src = producto.url;

    const nombre = document.createElement("h3");
    nombre.textContent = producto.nombre;

    const precio = document.createElement("p");
    precio.innerText = producto.precio;

    const boton = document.createElement("button");
    boton.textContent = "Agregar";
    boton.addEventListener("click", () => {
        agregarAlCarrito(producto);
    });

    contenedor.appendChild(nombre);
    contenedor.appendChild(img);
    contenedor.appendChild(precio);
    contenedor.appendChild(boton);

    return contenedor;
};

const agregarCards = (productos) => {
    const cards = productos.map((producto) => {
        return articulosCards(producto);
    });
    articulos.append(...cards);
};

agregarCards(Productos);
obtenerCarritoDeLocalStorage();
actualizarCarrito();
 
