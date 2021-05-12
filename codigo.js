//Arme un formulario en HTML y CSS que pida dos números.
//El formulario puede tener un botón de enviar o pueden utilizarse eventos para detectar que el usuario escribe un número
//en cada campo y que termina de hacerlo.
//La página deberá tener un archivo externo estilos.css y otro archivo externo codigo.js donde estén los estilos y las
//funciones JavaScript respectivamente.
//La página deberá aceptar solo números mayores o iguales a 0 y menores a 100.000, caso contrario deberá mostrar una
//alerta con el mensaje: “Sólo se aceptan números positivos menores a 100.000”. No debe aceptar letras ni puntos.
//Una vez ingresados ambos números (ambos distintos de Null), deberá mostrarse más abajo en la página, fuera del
//formulario, la leyenda “número 1 mayor que 2” o “número 2 mayor que 1” o “números iguales”, según corresponda.-->

//La página deberá aceptar solo números mayores o iguales a 0 y menores a 100.000, caso contrario deberá mostrar una
//alerta con el mensaje: “Sólo se aceptan números positivos menores a 100.000”. No debe aceptar letras ni puntos.
function validarNumero() {
    //genero las variables 
    var numero1 = Number(document.getElementById("numero1").value);
    var numero2 = Number(document.getElementById("numero2").value);
    //establezco las condiciones para las alertas en caso de que sea menor a 0 o superior a 100000
    if ((numero1 < 0) || (numero1 > 100000)) {
        alert("Error corregir numero 1 - Solo se aceptan numeros positivos menores a 100.000.");
    }
    // a modo de que sea mas didactico realizo por separado 
    if ((numero2 < 0) || (numero2 > 100000)) {
        alert("Error corregir numero 2 - Solo se aceptan numeros positivos menores a 100.000.");
    }
}

//Una vez ingresados ambos números (ambos distintos de Null), deberá mostrarse más abajo en la página, fuera del
//formulario, la leyenda “número 1 mayor que 2” o “número 2 mayor que 1” o “números iguales”, según corresponda.

function compararNumero() {
    var numero1 = Number(document.getElementById("numero1").value);
    var numero2 = Number(document.getElementById("numero2").value);


    if ((numero1 != null) && (numero2 != null)) {
        if (numero1 > numero2) {
            mensaje = "El numero 1 es mayor que numero 2.";
        }

        if (numero2 > numero1) {
            mensaje = "El numero 2 es mayor que numero 1.";
        }

        if (numero1 === numero2) {
            mensaje = "Ambos numeros son iguales.";
        }

    }
    else {
        mensaje = " Error -----  Falta completar datos.";

    }

    document.getElementById("mensajeComparacion").innerHTML = mensaje;

}