// const request = await fetch("https://jsonplaceholder.typicode.com/todos/1")
// const data = await request.json()
// console.log(data);

// async function fetchToJSONplaceholder () {
//   const request = await fetch("https://jsonplaceholder.typicode.com/todos/1")
// const data = await request.json()
// //console.log(data);
// return data;
// }
//fetchToJSONplaceholder()//lo mas adecuado guarda en una funcion siempre

// const info = await fetchToJSONplaceholder()
// console.log(info);
// info.completed = true
// console.log(info);

//fetch("")//funcion q lleva dentro una url

/////SI NO FUNCIONA USAMOS TRY Y CATCH

// async function fetchToJSONplaceholder () {
//   try { 
//     const request = await fetch("https://jsonplaceholder.typicode.com/todos/1")
//     const data = await request.json()
//     return data;
//   } catch (error) {
// console.log("hubo un error", error)
//   }
//   }

//  fetchToJSONplaceholder()
//  .then((info) => {
//   console.log(info);
//  })
////////////////////////////////////////////////////////
 fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((res) => res.json())
.then((data) => {
  console.log(data);
  })
//forma mas comun

//peculiaridad
//const miFuncion = () => null //retorna de forma implicita

// fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then(res =>(res.ok ? res.json() : Promise.reject(res)))
// .then((data) => {//mejor forma de trabajar(profesional)
//   console.log(data);
// })
