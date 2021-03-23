//This hace referencia al objeto sobre el cual se esta mandando a llamar esta funcion

const reservacion= {
    nombre: 'Jovani',
    apellido: 'Morales',
    total: 5000,
    pagadso: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} debe pagar ${this.total}`)
    }
}

reservacion.informacion();