

let planos = Array.from({length: 10}, () => Math.floor(Math.random() * 15)); 
let robarPlanos = (planos, callback) => callback(planos)

robarPlanos(planos,function(dato){
    let contador=0
    let dato1=0
    planos.forEach(function(dato){
        if(dato>0 && dato<=10){
            contador = contador+1
            dato1 = dato
        }
    })

    if(dato1 <= 10 || dato1 > 0){
        console.log(`tienes ${contador} planos reales`)
        console.log(`hemos ingresado ... nave despejada`)
    }else{
        console.log(`warning intruso ... no pueden abordar la nave`)
    }
})

planos.forEach(function(item){
    console.log(item);
});

