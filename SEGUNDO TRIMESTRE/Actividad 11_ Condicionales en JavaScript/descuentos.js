let compra = parseInt(prompt("¿Digite cuanto desea comprar?"));

 if ( compra < 100000){
    alert("No obtiene descuento");
 } else if (compra >= 100000 && compra <= 300000){
    alert("Obtiene un descuento del 5%");
 } else if (compra >= 300000 && compra <= 500000){
    alert("Obtiene un descuento del 10%");
 } else if (compra > 500000){
    alert("Obtiene un descuento del 15%");
 }
 