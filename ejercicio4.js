let ing = Number(prompt("Nota inglés"))
let mat = Number(prompt("Nota matemática"))
let len = Number(prompt("Nota lengua"))
let promedio = (ing+mat+len)/3
console.log("Promedio:", promedio)

if(promedio>=7){
    console.log("Aprueba")
}else{
    console.log("Reprueba")
}
