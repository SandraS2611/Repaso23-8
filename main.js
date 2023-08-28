//Estructuras de control de Flujo Condicionales

if (3 > 4) {
  //<--- SI, (VERDAD)
  console.log("VERDADERO");
} else {
  // <--- NO, (FALSEDAD)
  console.log("FALSO");
}

if (3 > 3) {
  //<--- SI, (VERDAD)
  console.log("VERDADERO");
} else {
  // <--- NO, (FALSEDAD)
  console.log("FALSO");
}

if (3 >= 2) {
  //<--- SI, (VERDAD)
  console.log("VERDADERO");
} else {
  // <--- NO, (FALSEDAD)
  console.log("FALSO");
}

if (3 >= 3) {
  //<--- SI, (VERDAD)
  console.log("VERDADERO");
} else {
  // <--- NO, (FALSEDAD)
  console.log("FALSO");
}

if (4 >= 3) {
  //<--- SI, (VERDAD)
  console.log("VERDADERO");
} else {
  // <--- NO, (FALSEDAD)
  console.log("FALSO");
}

if (2 >= 3) {
  //<--- SI, (VERDAD)
  console.log("VERDADERO");
} else {
  // <--- NO, (FALSEDAD)
  console.log("FALSO");
}

//o - or = ||
if (3 == 4 || 4 > 3) {
  //<--- || = o , or
  console.log("VERDADERO");
} else {
  // <--- NO, (FALSEDAD)
  console.log("FALSO");
}

// y - and = &&
if (3 == 4 && 4 > 3) {
  //<--- && = y, and
  console.log("VERDADERO");
} else {
  // <--- NO, (FALSEDAD)
  console.log("FALSO");
}

//not = !
console.log(3 == 4);
console.log(!(3 == 4));

if (!(3 == 4)) {
  // <--- NOT = !
  console.log("VERDADERO");
} else {
  // <--- NO, (FALSEDAD)
  console.log("FALSO");
}

if (!(3 == 3)) {
  // <--- NOT = !
  console.log("VERDADERO");
} else {
  // <--- NO, (FALSEDAD)
  console.log("FALSO");
}

if (!!(3 == 4)) {
  // <--- NOT = !
  console.log("VERDADERO");
} else {
  // <--- NO, (FALSEDAD)
  console.log("FALSO");
}

if (!(3 == 3)) {
  // <--- NOT = !
  console.log("CASO IF");
} else if (3 == 2) {
  // <--- NO, (FALSEDAD)
  console.log("CASO ELSE IF");
} else {
  console.log("CASO POR DEFECTO");
}
//////////////////////////////////////////////////////////
let condicion = 5; // CAMBIAR LOS VALORES( 13, 10,ETC)

if (condicion > 12) {
  console.log("CASO IF");
} else if (condicion > 9) {
  console.log("CASO ELSE IF");
} else if (condicion > 7) {
  console.log("CASO ELSE IF2");
} else {
  console.log("CASO POR DEFECTO");
}

//////////////////////////////////////////////////////
//CALCULADORA SENCILLA
let num1 = 10;
let num2 = 5;

let operacion = "suma";

if (operacion == "suma") {
  console.log(num1 + num2);
} else if (operacion == "resta") {
  console.log(num1 - num2);
} else if (operacion == "multiplicacion") {
  console.log(num1 * num2);
} else if (operacion == "division") {
  console.log(num1 / num2);
} else {
  console.log("Operacion no valida");
}
///////////////////////////////////////////////////////
let valor = 3;

switch (valor) {
  case 1:
    console.log("valor es igual a 1");
    break;
  case 2:
    console.log("valor es igual a 2");
    break;
  default:
    console.log("Operacion no valida");
    break;
}

switch (operacion) {
  case "suma":
    console.log(num1 + num2);
    break;
  case "resta":
    console.log(num1 - num2);
    break;
  case "multiplicacion":
    console.log(num1 * num2);
    break;
  case "division":
    console.log(num1 / num2);
    break;
  default:
    console.log("Operacion no valida");
    break;
}

// var cualquierCosa = "hola";
// if (true) {
//   var cualquierCosa = "chau";
//   console.log(cualquierCosa);
// }

// console.log(cualquierCosa);

let cualquierCosa = "hola";
if (true) {
  let cualquierCosa = "chau";
  console.log(cualquierCosa);
}

console.log(cualquierCosa);
////////////////////////////////////////////////////

// let iterador = 0
// while (iterador < 10) {
//     console.log("hola mundo");  // crea un bucle infinito
//     iterador++;// es lo mismo q = + 1
// }

// let iterador = 0
// while (iterador < 5) {
//     console.log("hola mundo");  // crea un bucle infinito
//     iterador++;// es lo mismo q = + 1
// }

// let iterador = 0;

// let miArray = ["Chau", "Hello", "Bye", "Hi"];
// console.log(miArray.length);

// while (iterador < miArray.length) {
//   console.log(miArray[iterador]);
//   iterador++; // es lo mismo q = + 1
// }

// let whileIterador = 0;

//let miArray2 = ["Chau", "Hello", "Bye", "Hi"];
//console.log(miArray2.length);

// while (whileIterador < miArray2.length) {
//   console.log(miArray2[whileIterador]);
//   whileIterador++; // es lo mismo q = + 1
// }

while (false) {
  console.log("hello while");
}

let miArray2 = ["Chau", "Hello", "Bye", "Hi", "Log"];
console.log(miArray2.length);
///////////////////////////////////////////////////////////
let i = 0;

do {
  console.log(miArray2[i]);
  i++;
} while (i < miArray2.length);

////////////////////////////////////////////////////////
for (let i = 0; i < miArray2.length; i++) {
  //console.log("Bucle for: ", miArray2[i]);
  console.log("for ", i);
}
///////////////////////////////////////////////////////
if (3 == 3) {
  true;
} else {
  false;
} // NO DEVUELVE NADA PORQ ESTA DECLARANDO

//----TERNARIA (? Y DECLARAR VALORES EN BASE A UNA COND)------

// let miVariable = 3 == 3 ? "Hola" : "Chau";
//    console.log(miVariable);

//    let miVariable = 3 == 4 ? "Hola" : "Chau";
//    console.log(miVariable);

// console.log(3 == 4 ? "Hola" : "Chau");
console.log(3 == 3 ? "Hola" : "Chau");