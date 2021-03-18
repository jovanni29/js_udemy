"use strict"; //Correr JS en modo estricto
//objetos
const producto= {
    nombreProducto : "Monitor 20 pulgadas",
    precio: 300,
    disponible:true,
}

Object.freeze(precio);

producto.imagen ='imagen.jpg';

console.log(Object.isFrozen(producto));

console.log(producto)
