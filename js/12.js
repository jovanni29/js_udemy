"use strict"; //Correr JS en modo estricto
//objetos
const producto= {
    nombreProducto : "Monitor 20 pulgadas",
    precio: 300,
    disponible:true,
}

Object.freeze(precio);//previenes agregar nuevas propiedades a tus objetos. no permite agregar ni modificar ni eliminar
//Object.seal(producto); permite modificar propiedades existentes
producto.imagen ='imagen.jpg';

console.log(Object.isFrozen(producto));

console.log(producto);
