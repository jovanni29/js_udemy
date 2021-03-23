//POO

//Object literal
const producto={
    nombre: 'Tablet',
    precio: 500
}

//object constructor
function Producto(nombre,precio,disponibilidad){
    this.nombre=nombre;
    this.precio=precio;
    this.disponibilidad= disponibilidad;
}

const producto2 = new Producto('Monitor curvo de 49"',800, true);
console.log(producto2);