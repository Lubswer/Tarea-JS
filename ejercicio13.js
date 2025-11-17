let numeros = [10,40,7,80,22]
let mayor = numeros[0]
for(let i=1;i<numeros.length;i++){
    if(numeros[i]>mayor){
        mayor=numeros[i]
    }
}
console.log("Mayor:", mayor)
