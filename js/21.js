//arrow functions
const sumar2= (n1,n2)=> console.log(n1+n2);
sumar2(5,10);

const aprendiendo= tecnologia => console.log(`Aprendiendo ${tecnologia} `);

aprendiendo('Javascript');

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
meses.forEach( mes=>{
    if(mes=='marzo'){
        console.log('Marzo si existe')
    }
});



//some ideal para arreglos de objetos
resultado=carrito.some(producto=> producto.nombre === 'Celular');


//Reduce
resultado= carrito.reduce((total,producto)=>total+producto.precio, 0);
console.log(resultado);

//filter
resultado= carrito.filter(producto=>producto.precio===50);

resultado= carrito.filter(producto=> producto.nombre!=='Celular');

