/*console.log("1")
console.log("2")
console.log("3")
console.log("user",user)
console.log("4")
console.log("5")*/

//Asincronismo refiere a las operaciones que se ejecutan en segundo plano y que podemos controlar de alguna manera
//Asincronismo es la capacidad de ejecutar código  sin bloquear el hilo de ejecución

/*setTimeout(function(){
    console.log("Soy el primer timeout y también el primer callback llamado como tal")
}, 5000)

setTimeout(() =>{
    console.log("Soy el segundo timeout y también el segundo callback llamado como tal")
}, 3000)*/

/*setTimeout(()=>{
    console.log(1)
    setTimeout(()=>{
        console.log(2)
        setTimeout(() => {
            console.log(3)
        }, 1000);
    },2000)
},3000)*/
//Output expected: 1, 2, 3 - De acuerdo a los tiempos de cada setTimeout()

console.log("1");
setTimeout(() => {
    console.log("2")
}, 5000);
console.log("3");
setTimeout(() => {
    console.log("4")
    setTimeout(() => {
        console.log("5")
    }, 4000);
}, 2000);
//Output expected: 1, 3, 4, 2, 5

//https://jsonplaceholder.typicode.com/users
const API_URL = "https://jsonplaceholder.typicode.com/users"
console.log(fetch(API_URL))

const getUser = (id) => {
    fetch(API_URL)
    .then(response =>  response.json())
    .then(data => console.log("data",data))
}
getUser()

//Promise using async await
const getUserAsync = async() =>{
    const getFetch = await fetch(API_URL) //await funciona como .then... espera que se resuelva para ejecutar
    console.log("getFetch", getFetch)
    const getData = await getFetch.json()
    console.log("getData", getData)
    showDataInDom(getData)
}
getUserAsync()

const showDataInDom = (getData) =>{
    //Escribo lo que quiero renderizar en el DOM
}
showDataInDom(getData)