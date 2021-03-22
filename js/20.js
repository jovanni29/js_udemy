//metodos de propiedad
const reproductor ={
    reproducir: function(id){
        console.log(`Reproduciendo cancion con el id: ${id}`)
    },
    pausar: function(){
        console.log('Pausando...')
    },
    crearPlaylist: function(nombre){
        console.log(`Creando la playlisto con el nombre: ${nombre}`)
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproduciendo la playlist con el nombre: ${nombre}`)
    }
}

reproductor.borrarCancion= function(id){
    console.log(`Eliminando la cancion con el id: ${id}`)
}
reproductor.reproducir(12);
reproductor.pausar();
reproductor.borrarCancion(1);
reproductor.crearPlaylist('Rolitas sad');
reproductor.reproducirPlaylist('Rolitas sad');