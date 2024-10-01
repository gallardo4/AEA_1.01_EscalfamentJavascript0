// Ex 1
function comparaNumeros() {
    let numA = prompt("Introdueix el num A:");
    let numB = prompt("Introdueix el num B");

    if (numA > numB) {
        return "El nombre més gran és: " + numA;
    } else if (numB > numA) {
        return "El nombre més gran és: " + numB;
    } else {
        return "Els dos nombres són iguals";
    }
}

function ex1() {
    console.log(comparaNumeros(4, 3));
}

// Ex 2

function suma1a100() {
    let resultado = 0;
    for (let i = 1; i <= 100; i++) {
        resultado += i;
    }
    return "El resultat de sumar tots els nombres de l'1 al 100 és: " + resultado;
}

function ex2() {
    console.log(suma1a100());
}

// Ex 3

function PedraPaper() {
    let resultado = "";
    for (let i = 1; i <= 20; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            resultado += "Tisores ";
        } else if (i % 5 == 0) {
            resultado += "Paper ";
        } else if (i % 3 == 0) {
            resultado += "Pedra ";
        } else {
            resultado += i + " ";
        }
    }
    return resultado;
}

function ex3() {
    console.log(PedraPaper());
}

// Ex 4

function esParell(num) {
    if (num % 2 == 0) {
        return num + " és parell: true";
    }
    return num + " és parell: false";
}

function ex4() {
    let num = prompt("Introdueix un num:");

    console.log(esParell(num));
}

// Ex 5

function revertirCadena(cadena) {
    return cadena.split('').reverse().join('');
}

function ex5() {
    let cadena = prompt("Introdueix una cadena:");

    console.log(revertirCadena(cadena));
}

// Ex 6

function factorial(n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

function ex6() {
    let num = prompt("Introdueix un num:");

    console.log(factorial(num));
}

// Ex 7

function filtrarPositius(array) {
    let nouArray = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            nouArray.push(array[i]);
        }
    }

    return nouArray.join(" ");
}

function ex7() {
    console.log(filtrarPositius([1, -2, 3]));
}