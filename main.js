function calculadora({ operacion, num1, num2 }) {// {} = define un objeto de argumento
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
  
  let miVariable = calculadora({//VOID = no retorna nada
    operacion: "multiplicacion",
    num1: 20,
    num2: 10,
  })

 console.log(miVariable);