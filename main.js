let nombre = "Sandra ";
let apellido = "12"; //IGUAL LO CONCATENA AUNQ SEA OTRO TIPO

//console.log(nombre, apellido);

let nombreCompleto = nombre + apellido;
console.log(nombreCompleto);

if (2 == "2") {
  //el contenido es igual para JS
  console.log("VERDAD");
} else {
  console.log("FALSO");
}

if (2 === "2") {
  //JS compara los tipos === es mas estricto
  console.log("VERDAD");
} else {
  console.log("FALSO");
}
console.log(`${nombre} ${apellido}`);

console.log(nombre.concat(apellido));

let stringRandom = " jdkjhj djgjklj gkfjd ";

console.log(stringRandom);

console.log(stringRandom.trim()); //limpia el espacio de adelante y de atras

console.log(stringRandom.split()); //convierte un string en un array de 1 posicion

console.log(stringRandom.split("")); // separa los array en distintas partes

console.log(stringRandom.trim().split(""));// no hay espacios con comillas

let stringRandom1 = "123456";
console.log(stringRandom1);

console.log(stringRandom1.trim()); //limpia el espacio del principio y del final

console.log(stringRandom1.split()); //convierte un string en un array de 1 posicion

console.log(stringRandom1.split("")); // separa los array en distintas partes

console.log(stringRandom1.trim().split(""));

console.log(stringRandom1.trim().split("").reverse());//invierte el orden

//reverse y join metodos de array
console.log(stringRandom1.trim().split("").reverse().join(","));//los une y les agrega comillas para separaro puede ser un espacio

//console
console.log("mensaje");
console.error("Error");
console.warn("Warn");
console.info("Info");

let miArray = [1, 2, 3, 4, 5, 6]
console.log(miArray);

let miArray1 = [//array de 2D - matriz de 3x3
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(miArray1);

console.table(miArray1);