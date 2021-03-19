const meses= ['enero', 'febrero', 'marzo', 'abril', 'mayo'];

const carrito=[
{nombre: 'Monitor 20 pulgadas', precio: 500},
{nombre: 'Television 50 pulgadas', precio: 700},
{nombre: 'Tablet', precio: 300},
{nombre: 'Audifonos', precio: 200},
{nombre: 'Teclado', precio: 50},
{nombre: 'Celular', precio: 500},
{nombre: 'Bocinas', precio: 300},
{nombre: 'Laptop', precio: 800}

];

//forEach vamos a iterar los elementos del arreglo
meses.forEach(function(mes){
    if(mes=='marzo'){
        console.log('Marzo si existe')
    }
});

//includes
let resultado=meses.includes('Diciembre');

//some ideal para arreglos de objetos
resultado=carrito.some(function(producto){
    return producto.nombre === 'Celular'
});


//Reduce
resultado= carrito.reduce(function(total,producto){
    return total+producto.precio
}, 0);


//filter
resultado= carrito.filter(function(producto){
    return producto.precio===50
})
resultado= carrito.filter(function(producto){
    return producto.nombre!=='Celular'
})
console.log(resultado);