let opcion = prompt("Figura: cuadrado, rectangulo, triangulo, circulo")

if(opcion=="cuadrado"){
    let l = Number(prompt("Lado"))
    console.log("Área:", l*l)
    console.log("Perímetro:", l*4)
}
if(opcion=="rectangulo"){
    let b = Number(prompt("Base"))
    let h = Number(prompt("Altura"))
    console.log("Área:", b*h)
    console.log("Perímetro:", 2*(b+h))
}
if(opcion=="triangulo"){
    let bt = Number(prompt("Base"))
    let ht = Number(prompt("Altura"))
    let hip = Math.sqrt((bt*bt)+(ht*ht))
    console.log("Área:", (bt*ht)/2)
    console.log("Perímetro:", bt+ht+hip)
    console.log("Hipotenusa:", hip)
}
if(opcion=="circulo"){
    let r = Number(prompt("Radio"))
    console.log("Área:", 3.1416*(r*r))
    console.log("Perímetro:", 2*3.1416*r)
}
