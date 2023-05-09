/* 
   
Simulacro de tienda destinada a la venta de componentes de Computadora

Alumno: Lucas Meurzet

*/

let nombreUser = prompt("Ingrese su nombre de Usuario");
let miStock = "1. GTX 1650 ($220) \n 2. GTX 1660 ($350) \n 3. RTX 3070 ($750) \n 4. RTX 3090 ($1050) \n 50. Finalizar compra";
let precioCompra = 0;

/*

Función "agregarCarro": Agrega el producto seleccionado y lo suma a la cuenta final.

*/
function agregarCarro(producto, precio){
    alert(`${nombreUser} agregaste ${producto} a tu lista de compra`);
    precioCompra += precio;
}

/*

Función "finalizarCompra": Cunado la ópcion del usuario sea "50", finaliza la compra, donde deja un mensaje y la suma final de los productos seleccionados.

*/
function finalizarCompra (){
    if (eleccionUser == 50){
        alert(`${nombreUser} gracias por tu compra, tu total es de ${precioCompra}`)
    }
}


let eleccionUser = parseInt(prompt(`${nombreUser} estas son nuestras gráficas, seleccione la ópcion deseada \n ${miStock}`));

/* 

Ciclo: Mientras la ópcion del usuario sea distina a 50 se ejecutará el siguiente cicilo con la incorporación de un nuevo prompt, para evitar un bucle y el usuario pueda seleccionar la ópcion deseada.

*/
while (eleccionUser != 50) {

    switch (eleccionUser) {
        case 1:
            agregarCarro("GTX 1650", 220)
            break;
        case 2:
            agregarCarro("GTX 1660", 350)
            break;
        case 3:
            agregarCarro("RTX 3070", 750)
            break;
        case 4:
            agregarCarro("RTX 3090", 1050)
            break;
        default:
            alert("No contamos con el producto seleccionado, disculpe la molestia")
    }
    eleccionUser = parseInt(prompt(`${nombreUser} Desea seguir agregando productos? \n ${miStock}`));
};


finalizarCompra()


