//Clases

class Producto{
    //constructor
    constructor(nombre, precio){
        this.nombre=nombre;
        this.precio=precio;
    }

    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de $${this.precio}`;
    }
    obtenerPrecio(){
        console.log(this.precio);
    }

}
const producto2 = new Producto('Monitor curvo de 49"',2899.99, true);
const producto3= new Producto('memoria ram 8 gb',1499.99,false);

class Libro extends Producto{
 constructor(nombre,precio,isbn){
 super(nombre,precio);
 this.isbn=isbn;
}
formatearProducto(){
    return `${super.formatearProducto()} y su ISBN es ${this.isbn}`;
}
obtenerPrecio(){
    super.obtenerPrecio();
    console.log('Y si hay en existencia')
}
}

const libro= new Libro('JavaScript',120,'73891');
console.log(libro.formatearProducto());
console.log(libro.obtenerPrecio());
console.log(producto2.formatearProducto());
