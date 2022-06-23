// ejercicios de las clases

// Clase 9
// 1 - Realiza un el código en JavaScript que cargue en un arreglo con los nombres de los días de la semana (lunes, martes, miércoles, etc.) y los imprima por consola o los muestre por pantalla.

var diasSemana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];

function semana() {
alert('Dias de la Semana:' + diasSemana);
diasSemana.push(prompt("Ingrese el dia que falta:"));
alert('Los 7 dias de la Semana son:' + diasSemana);
}

// 2 - Realiza un código en JavaScript que cargue en un arreglo con 5 numeros enteros y muestre la suma de sus elementos.

var numEnt = [1, 2, 3]
numEnt.push(4);  //para agregar un numero extra al arreglo.
function suma() {
    numEnt.push(prompt('Ingrese un numero'));  //para que el usuario ingrese un numero al Arreglo.
    let sumaEnt = 0;
        for (let i = 0; i < numEnt.length; i++) {
        numero = numEnt[i];
        sumaEnt += numero;
        }
    alert('Dado los numeros:' + numEnt + ', la suma de estos 5 numeros enteros es de: ' + sumaEnt);
}

// 3- Dados dos arreglos de 6 numeros enteros cada uno, colocar en un tercer arreglo la suma de cada uno de los elementos en sus mismas posiciones.

var arr1 = [1, 2, 3, 4, 5, 6]
var arr2 = [1, 2, 3, 4, 5, 6]
function sumaArr () {
    let sumaArr = []
    for(i = 0; i < arr1.length; i++) {
        sumaArr[i] =arr1[i]+arr2[i];
    }
    alert('Dado los arreglos: ' + arr1 + ' y ' + arr2 + ' La suma de cada posicion es: ' + sumaArr);
}

// 4 - Dado un arreglo de números crea una función que muestre la cantidad de números mayores que 30, la cantidad de valores menores a 50 y los iguales a 0 (cero).

var arr4 = [2, 35, 66, 7, 76, 89, 0, 267, 44, 0, 15, 38]
function mayores30 () {
    let mayor30 = []
    let sum30 = 0
    for(i = 0; i < arr4.length; i++) {
        if(arr4[i] >= 30) {
            mayor30.push(arr4[i]);  
            sum30 = sum30 + 1;  
        }
    }
    alert('Los numeros mayores a 30 son: ' + sum30 + '. Aqui estan: ' + mayor30);
}

function mayores50 () {
    let mayor50 = [];
    let sum50 = 0;
    for(i = 0; i < arr4.length; i++) {
        if(arr4[i] >= 50) {
            mayor50.push(arr4[i]);  
            sum50 = sum50 + 1;  
        }
    }
    alert('Los numeros mayores a 50 son: ' + sum50 + '. Aqui estan: ' + mayor50);
}

function igual0 () {
    let ig0 = [];
    let sum0 = 0;
    for(i = 0; i < arr4.length; i++) {
        if(arr4[i] == 0) {
            ig0.push(arr4[i]);  
            sum0 = sum0 + 1;  
        }
    }
    alert('Los numeros iguales a 0 son: ' + sum0 + '. Aqui estan: ' + ig0);
}

// Clase 10
// 1 - Crea una función que solicite al usuario 5 nombres y los almacene en arreglo, en caso de ingresar nombres repetidos no debe incluirlos. Luego con otra función muestra la lista de nombres en el array.

var nombres = [];
function ingNombres () {
    
    nombres.push(prompt('Ingrese el nombre 1'));
    nombres.push(prompt('Ingrese el nombre 2'));
    nombres.push(prompt('Ingrese el nombre 3'));
    nombres.push(prompt('Ingrese el nombre 4'));
    nombres.push(prompt('Ingrese el nombre 5'));
    
    let unicos = [];
    for(var i = 0; i < nombres.length; i++) {
        const elemento = nombres[i];
        if (!unicos.includes(nombres[i])) {
        unicos.push(elemento);
        }
    }
    alert('Nombres ingresados sin repetir' + unicos);
}


//function nombres () {

//}

// 2 - Teniendo un arreglo de colores ej. ['azul', 'verde', 'rojo'], crea una función en js que genere una etiquetaSELECT donde cada OPTION es uno de los colore del arreglo.


function seColores () {
    let colores = ['Azul', 'Verde', 'Rojo']
    
}

    