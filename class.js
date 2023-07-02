class Producto{
    constructor(id, nombre, precio, imagen){
        this.id = id,
        this.nombre = nombre,
        this.precio = precio,
        this.imagen = imagen
    }
}

class ObjCarrito {
    constructor(idProducto, cantidad) {
        this.idProducto = idProducto;
        this.cantidad = cantidad;
    }

    sumaStock() {
        this.cantidad++;
    }
}

