//Tipos de datos Primitivos

//strings
console.log(typeof "Sandra Sanchez");

//number
console.log(typeof 1234);

//bigint
console.log(typeof 2374598745897698457567567n);

//booleanos
console.log(typeof true);
console.log(typeof false);
console.log(false == true);
console.log(1 == 2);
console.log(1 == 1);
console.log(1 > 1);
console.log(2 > 1);

//null
console.log(null);
console.log(typeof null);
console.log(null == 1);
console.log(null == null);

//undefined
console.log(undefined);
console.log(typeof undefined);
console.log(null == undefined);
console.log(null === undefined);

//Symbol
console.log(Symbol());
console.log(typeof Symbol());
console.log(Symbol() == Symbol());

//Tipos de datos Compuestos

//array
console.log(typeof ["hola", "chau", false, true, 1234, 12n, Symbol()]);
console.log(["hola", true, 1234, 12n, Symbol()][0]);
console.log(["hola", true, 1234, 12n, Symbol()][1]);
console.log(["hola", true, 1234, 12n, Symbol()][2]);
console.log(["hola", true, 1234, 12n, Symbol()][3]);
console.log(["hola", true, 1234, 12n, Symbol()][4]);
console.log(["hola", true, 1234, 12n, Symbol()][5]);

//objetos
console.log({
  nombre: "Sandra",
  apellido: "Sanchez",
}.apellido);

console.log({
    nombre: "Sandra",
    apellido: "Sanchez",
  }.nombre);