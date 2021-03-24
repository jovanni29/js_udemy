const usuarioAutenticado= new Promise((resolve, reject) =>{
const auth =true;

if(auth){
resolve('Usuario autenticado');//el promise se cumple
}else{
reject('No se puede autenticar'); //el promise  no se cumple
}
});

usuarioAutenticado
.then( resultado=> console.log(resultado))
.catch( error=> console.log(error))
//En los promises existen 3 valores
//Pending: No se ha cumplido pero tampoco se ha rechazado
//Fulfilled: ya se cumplio
//Rejectd: se ha rechazado o no se pudo cumplir