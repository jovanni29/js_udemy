//Declaracion de una funcion

function sumar(numero1=0, numero2=0){//numero1, 2 son parametros 
    console.log(numero1+numero2); //el parametro por default toma el valor cuando no se esta colocando el argumento al llamar a la funcion
}
sumar(11,10);//argumentos o los valores reales

//expresion de la funcion
const sumar2= function(n1,n2){
    console.log(n1+n2);
}
sumar2(15,8.5);
