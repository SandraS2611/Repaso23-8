import { saludar } from "./cualquiera.js";

export function calculadora({ operacion, num1, num2 }) {// {} = define un objeto de argumento
    if (operacion == "suma") {
      return num1 + num2;
    } 

    if (operacion == "resta") {
      return num1 - num2;
    } 

    if (operacion == "multiplicacion") {
      return num1 * num2;
    }

    if (operacion == "division") {
      return num1 / num2;
    } 
      return "Operacion no valida";
    }

saludar();