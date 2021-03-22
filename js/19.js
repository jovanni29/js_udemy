// function sumar(n1,n2){
//     return(n1+n2);
// }
// const resultado=sumar(1,2);
// console.log(resultado);

let total= 0;

function agregarCarrito(precio){

    return total +=precio;


}
total= agregarCarrito(200);
total= agregarCarrito(400);
total=agregarCarrito(600);


function calcularImpuesto(total){
    return 1.15*total;
}

console.log(total);

const totalAPagar =calcularImpuesto(total);
console.log(`El total a pagar con impuestos es de: $${totalAPagar}`);