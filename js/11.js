//objetos
const producto= {
    nombreProducto : "Monitor 20 pulgadas",
    precio: 300,
    disponible:true,
}

//forma anterior

// const precioPoducto=producto.precio;
// const nombreProducto= producto.nombreProducto;

// console.log(precioPoducto);
// console.log(nombreProducto);

//Destructuring
const {precio,nombreProducto}=producto;

console.log(precio);
console.log(nombreProducto);