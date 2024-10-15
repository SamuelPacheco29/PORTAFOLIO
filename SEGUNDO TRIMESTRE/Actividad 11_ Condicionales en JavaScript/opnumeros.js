let A = parseInt (prompt("Digite un numero entero"));
let B = parseInt (prompt("Digite otro numero entero"));

var operacion = prompt("Seleccione alguna operacion : +, -, *, /");


switch (operacion){
    case "+":
        alert(A+B);
        break;
   case "-":
        alert(A-B);
        break;
    case "*":
            alert(A*B);
        break;
    case "/":
        if(B==0){
            alert("No se puede dividir por cero");
        }else {
            alert(A/B);
        }
        break;
    default:
        alert("Signo incorrecto, vuelva a intentar");
        break;
}