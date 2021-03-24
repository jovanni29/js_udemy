//POO

//Object literal
const producto={
    nombre: 'Tablet',
    precio: 500
}

//object constructor
function Cliente(nombre,apellido){
    this.nombre=nombre;
    this.apellido= apellido;

}

Cliente.prototype.formatearCliente=function(){
    return `El cliente ${this.nombre} ${this.apellido}`;
}

function Producto(nombre,precio){
    this.nombre=nombre;
    this.precio=precio;
  
}
//crear funciones que solo se puedan utilizar en un objeto en especifico
Producto.prototype.formatearProducto= function(){
    return `El producto ${this.nombre} tiene un precio de $${this.precio}`;
}




const producto2 = new Producto('Monitor curvo de 49"',2899.99, true);
const producto3= new Producto('memoria ram 8 gb',1499.99,false);
const cliente= new Cliente('Jovani', 'Morales')

console.log(cliente.formatearCliente());
console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto())