
function asociarDatos(nombre, planeta, edad, estatura, callback ){

    setTimeout(function(){
        let datos = {
            nombre: nombre,
            planeta: planeta,
            edad: edad,
            estatura: estatura
        }
        callback(datos)
    },10000)

}

asociarDatos('jovany', 'planeta Rojo', 2, 1.70, function(datos){

    if(datos.edad < 15){
        console.log(`Bienvenido ${datos.nombre} ... preparate para tu primera clase de manejo de la fuerza`)
    }else{
        console.log(`bienvenido ${datos.nombre} ... preparate para tu clase de manejo de sable`)
    }

})