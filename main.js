// //Funciones
// // let num1 = 10;
// // let num2 = 5;
// // let num3 = 10;
// // let num4 = 20;

// // let operacion = "suma";

// // if (operacion == "suma") {
// //   console.log(num1 + num2);
// // } else if (operacion == "resta") {
// //   console.log(num1 - num2);
// // } else if (operacion == "multiplicacion") {
// //   console.log(num1 * num2);
// // } else if (operacion == "division") {
// //   console.log(num1 / num2);
// // } else {
// //   console.log("Operacion no valida");
// // }

// //Funciones Declarativa
// function decirHola () {
//     console.log("Hola mundo");
// }
// decirHola();
// decirHola();
// decirHola();

// //Funcion Expresiva(NO SE USA)
// // const decirHola2 = function () {
// //     console.log("hola mundo2");
// // }
// // decirHola();
// // decirHola2();

// //ARROW FUNCTIONS - FUNCIONES DE FLECHA
// const decirHola3 = () => {
//     console.log("Hola mundo3");
// }
// decirHola();
// decirHola2();
// decirHola3();
/////////////////////////////////////////////////////////

// function suma (numero1 = 0, numero2 = 0) {
//     console.log(numero1 + numero2);
// }
// suma(1, 2);
// suma(6, 6);
// suma(1);

function calculadora(num1, num2, operacion) {// () = argumentos
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
}
calculadora(10, 20, "suma");// () = parametros
calculadora(50, 30, "resta");
calculadora(10, 20, "multiplicacion");
calculadora(10, 20, "division");
calculadora(10, 20);
calculadora(10, "suma");


function calculadora({ operacion, num1, num2 }) {// {} = define un objeto de argumento
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
  }
  calculadora({// {} = propiedades de los objetos del arg en los param
    operacion: "resta",
    num1: 10,
  })

  ///////////////////////////////////////////////
  const miObjeto = {
    nombre: "Sandra",
    apellido: "Sanchez",
  };
  const miArray = ["Sandra", "Sanchez"];

  //Desestructuracion de objetos
  const {apellido, nombre} = miObjeto;

  //Desestructuracion de arrays importa el orden
  const [variable1, variable2] = miArray;