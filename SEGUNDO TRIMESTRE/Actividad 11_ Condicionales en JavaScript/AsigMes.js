let mes = parseInt(prompt('Escriba un numero del 1 al 12 de acuerdo a los meses del año'));

switch (mes) {
    case 1:
        document.getElementById('mensaje').innerHTML = 'El mes es Enero';
        break;
    case 2:
        document.getElementById('mensaje').innerHTML = 'El mes es Febrero';
        break;
    case 3:
        document.getElementById('mensaje').innerHTML = 'El mes es Marzo';
        break;
    case 4:
        document.getElementById('mensaje').innerHTML = 'El mes es Abril';
        break;
    case 5:
        document.getElementById('mensaje').innerHTML = 'El mes es Mayo';
        break;
    case 6:
        document.getElementById('mensaje').innerHTML = 'El mes es Junio';
        break;
    case 7:
        document.getElementById('mensaje').innerHTML = 'El mes es Julio';
        break;
    case 8:
        document.getElementById('mensaje').innerHTML = 'El mes es Agosto';
        break;
    case 9:
        document.getElementById('mensaje').innerHTML = 'El mes es Septiembre';
        break;
    case 10:
        document.getElementById('mensaje').innerHTML = 'El mes es Octubre';
        break;
    case 11:
        document.getElementById('mensaje').innerHTML = 'El mes es Noviembre';
        break;
    case 12:
        document.getElementById('mensaje').innerHTML = 'El mes es Diciembre';
        break;
    default:
        document.getElementById('mensaje').innerHTML = 'El numero ingresado no corresponde a un mes valido.';
}