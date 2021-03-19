//arreglos
//sirven para agrupar elementos del mismo tipo o relacionados

const numeros=[10,20,30,40,50];





//acceder a los valores de un arreglo
// console.log(meses[0]);
// console.log(meses[1]);
// console.log(meses[2]);
// console.log(meses[3]);
// console.log(meses[4]);

//conocer la extension de un arreglo
// console.log(meses.length);

// numeros.forEach(function (numeros) {
//     console.log(numeros);
// })

//metodos para agregar valores a un arreglo
numeros.push(60,70,80);//agrega elementos al final del arreglo
numeros.unshift(-10,-20,-30);//agrega elementos al inicio del arreglo
console.table(numeros);

const meses= ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio'];
// meses.pop();//elimina el ultimo elemento del arreglo
// meses.shift();//elimina el primer elemento de un arreglo
//  //posicion del arreglo y numero de elementos a eliminar a partir de ahi
console.table(meses);
//Rest operator o Spread Operator

const nuevoArreglo= [...meses,'julio'];
console.log(nuevoArreglo);