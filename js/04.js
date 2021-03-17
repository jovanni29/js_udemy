//Strings o cadenas de texto
const tweet = 'Aprendiendo desarrollo web';
const producto = "Monitor de 20\""; //diagonal invertida para poder meter comillas dentro del string o comillas simples por fuera
const producto2= String('Monitor 30 pulgadas');
const producto3= new String('Monitor 50 pulgadas');
const email= 'correo@correo.com'
///typeof para saber el tipo de dato
console.log(typeof producto);
console.log(typeof producto2);
console.log(typeof producto3);




//length es para la extension
console.log(tweet.length);
console.log(producto2);

//indexof (retorna la posicion)
console.log(tweet.indexOf('desarrollo'));
console.log(producto2.indexOf('tablet'));
console.log(email.indexOf('@'));
//includes retorna true o false
console.log(tweet.includes('web'));
console.log(producto2.includes('web'));