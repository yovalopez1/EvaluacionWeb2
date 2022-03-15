let productos=[
    {nombre:"papa",tipo:"vegetal",calorias:200},
    {nombre:"tomate",tipo:"vegetal",calorias:30},
    {nombre:"hormiga culona",tipo:"insecto",calorias:50},
    {nombre:"zanahoria",tipo:"vegetal",calorias:35},
    {nombre:"mango",tipo:"vegetal",calorias:50},
    {nombre:"banano",tipo:"vegetal",calorias:300},
    {nombre:"pollo",tipo:"animal",calorias:150},
    {nombre:"carne de res",tipo:"animal",calorias:300},
    {nombre:"camarones",tipo:"animal",calorias:250},
    {nombre:"ancas de rana",tipo:"animal",calorias:200},
    {nombre:"yuca",tipo:"vegetal",calorias:250},
    {nombre:"tomate",tipo:"vegetal",calorias:30},
    {nombre:"hormiga culona",tipo:"insecto",calorias:50},
    {nombre:"zanahoria",tipo:"vegetal",calorias:35},
    {nombre:"mango",tipo:"vegetal",calorias:50},
    {nombre:"pescado",tipo:"animal",calorias:200},
    {nombre:"pollo",tipo:"animal",calorias:150},
    {nombre:"carne de res",tipo:"animal",calorias:300},
    {nombre:"camarones",tipo:"animal",calorias:250},
    {nombre:"ancas de rana",tipo:"animal",calorias:200},
    {nombre:"papa",tipo:"vegetal",calorias:200},
    {nombre:"tomate",tipo:"vegetal",calorias:30},
    {nombre:"banano",tipo:"vegetal",calorias:300},
    {nombre:"zanahoria",tipo:"vegetal",calorias:35},
    {nombre:"mango",tipo:"vegetal",calorias:50},
    {nombre:"pescado",tipo:"animal",calorias:200},
    {nombre:"yuca",tipo:"vegetal",calorias:250},
    {nombre:"carne de res",tipo:"animal",calorias:300},
    {nombre:"camarones",tipo:"animal",calorias:250},
    {nombre:"ancas de rana",tipo:"animal",calorias:200},
    {nombre:"papa",tipo:"vegetal",calorias:200},
    {nombre:"tomate",tipo:"vegetal",calorias:30},
    {nombre:"hormiga culona",tipo:"insecto",calorias:50},
    {nombre:"zanahoria",tipo:"vegetal",calorias:35},
    {nombre:"mango",tipo:"vegetal",calorias:50},
    {nombre:"pescado",tipo:"animal",calorias:200},
    {nombre:"pollo",tipo:"animal",calorias:150},
    {nombre:"banano",tipo:"vegetal",calorias:300},
    {nombre:"camarones",tipo:"animal",calorias:250},
    {nombre:"ancas de rana",tipo:"animal",calorias:200},
    {nombre:"papa",tipo:"vegetal",calorias:200},
    {nombre:"tomate",tipo:"vegetal",calorias:30},
    {nombre:"hormiga culona",tipo:"insecto",calorias:50},
    {nombre:"zanahoria",tipo:"vegetal",calorias:35},
    {nombre:"yuca",tipo:"vegetal",calorias:250},
    {nombre:"pescado",tipo:"animal",calorias:200},
    {nombre:"pollo",tipo:"animal",calorias:150},
    {nombre:"carne de res",tipo:"animal",calorias:300},
    {nombre:"banano",tipo:"vegetal",calorias:300},
    {nombre:"ancas de rana",tipo:"animal",calorias:200},
]




function definirCalorias(productos, callback){
    let sumatoriasCaloricas = 0
    setTimeout(function(){
        productos.forEach(function(producto){
            if(producto.tipo == 'vegetal' && producto.calorias >= 200){
                sumatoriasCaloricas = sumatoriasCaloricas + producto.calorias
                console.log(producto.nombre);
            }
        });
        callback(sumatoriasCaloricas)
    },5000)

}

definirCalorias(productos,function(sumatoriasCaloricas){
    console.log(`la sumatoria de calorias es ${sumatoriasCaloricas}`)
})

