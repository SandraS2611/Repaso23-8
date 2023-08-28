import { calculadora } from "./math.js";
//import { saludar } from "./cualquiera.js";
//saludar();

let variable = prompt("pasame un numero");
//console.log(variable); lo muestra en la consola
alert(variable);//lo muestra en la pantalla directamente


let miVariable = calculadora({
    operacion: "division",
    num1: 20,
    num2: 10,
  })

 console.log(miVariable);

