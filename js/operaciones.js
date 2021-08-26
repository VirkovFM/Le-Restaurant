
var costoT = 0.0;

var platillo = "";
var bebida = "";


var oPlatillo=prompt("Introduce el platillo (coloca la letra entre parentesis)\na) Nachos\nb) Pizza\nc) Tacos");
//var oPlatillo= "a";

var pcantidad=prompt("Introduce el numero de porciones a ordenar");
//var pcantidad= 2;

var oBebida=prompt("Introduce el tipo de bebida que desea (coloca la letra entre parentesis)\na) Agua Natural\nb) Soda\nc) Cerveza");
//var oBebida= "a";



if(oPlatillo=="a" || oPlatillo=="A"){
    costoT=(pcantidad*30);
    platillo="Nachos";
}
else if(oPlatillo=="b" || oPlatillo=="B"){
    costoT=(pcantidad*120);
    platillo="Pizza";
}
else if(oPlatillo=="c" || oPlatillo=="C"){
    costoT=(pcantidad*10);
    platillo="Tacos";
}
else{
    alert("Favor de escribir una opción valida (a, b ó c)");   
}




if(oBebida=="a" || oBebida=="A"){
    costoT+=15;
    bebida="Agua natural";
}
else if(oBebida=="b" || oBebida=="B"){
    costoT+=30;
    bebida="Soda";
}
else if(oBebida=="c" || oBebida=="C"){
    costoT+=45;
    bebida="Cerveza";
}
else{
    alert("Favor de escribir una opción valida (a, b ó c)");   
}




console.log("ORDEN:\n",pcantidad,platillo+"(s) con",bebida,"\n------------------\nTOTAL DE COMPRA:",costoT+"$")
