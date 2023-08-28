// // let miName =prompt("Introduce un nombre")

// // function saludar (name) {
// //     console.log("hola", name);
// // }
// // saludar(miName)
// function saludar (name, callback) {
//     console.log("Hola", name);
//     callback(name)
// }

// // function miOtraFuncion() {
// //     console.log("Chau mundo");

// // saludar("1", miOtraFuncion)
// // saludar("2", miOtraFuncion)
// // saludar("3", miOtraFuncion)
// // saludar("4", miOtraFuncion)
// // saludar("5", miOtraFuncion)
// // saludar("6", miOtraFuncion) no es  la forma normal de hacerlo

// // saludar ("1", function() {
// //     console.log("chau mundo");
// // }) la mas utilizadad pero...

// //Funcion de Flecha
// // saludar("1", ()=> {
// //     console.log("Chau Mundo");
// // })

// const funcion = (name) => {
//     console.log("Chau Mundo", name);
// }

// saludar("1", funcion)
console.log("Mensaje1");

// const miPromesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Mensaje2")
// }, 3000)
// })

const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("mensaje2") //resolve cambio y da error se resuelve mas abajo
  }, 2000)
})

// miPromesa
// .then((res) => {
//   console.log(res);
// })
// .catch((error) => {
//     console.log("hubo un error");
// })

// miPromesa
// .then((res) => {
//   console.log(res);
// })
// .catch((error) => {
//     console.error(error);//yo manejo el error no me lo devuelve js
// })

// .finally(() => {
//     console.log("Hola");
// })//casos de uso ejemplo: lowder pare.

//funciona cuando estoy en eltop level
//TOP LEVEL AWAIT

// const res = await miPromesa
// console.log(res);

async function miFuncionAsincrona () {// funcion normal
    const res = await miPromesa
    console.log(res);
}

miFuncionAsincrona()

const miFuncionAsincrona2 = async () => {//solucionado "" porq da error pero controlado
   try {//detecta si hay un error
    const res = await miPromesa
    console.log(res)
   } catch (error) {//lo captura
    console.error(error)
}   finally {
    console.log("holu");
}
 }
   

miFuncionAsincrona2()

console.log("Mensaje3");

