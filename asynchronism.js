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

/*console.log("1");
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
getUser()*/

//Promise using async await
/*const getUserAsync = async() =>{
    const getFetch = await fetch(API_URL) //await funciona como .then... espera que se resuelva para ejecutar
    console.log("getFetch", getFetch)
    const getData = await getFetch.json()
    console.log("getData", getData)
    //showDataInDom(getData)
}
getUserAsync()*/

/*const showDataInDom = (getData) =>{
    //Escribo lo que quiero renderizar en el DOM
}
showDataInDom(getData)*/

const API_URL_EVENTS = "https://amazing-events.herokuapp.com/api/events"

/*const getEvents = async() =>{
    const getFetch = await fetch(API_URL_EVENTS);
    console.log("getFetch", getFetch)
    const dataEvents = await getFetch.json()
    console.log("dataEvents",dataEvents)

    //Utilizamos spreed operator para agregarle nueva key a la respuesta de la API
    const newData = {
        ...dataEvents,
        havePerrito: false,
    };

    eventsInDom(dataEvents);
}
getEvents()*/

/*const eventsInDom = (dataEvents) => {
    //const events = dataEvents.events
    //const currenteDate = dataEvents.currenteDate

    //STRUCTURING

    //const { events } = dataEvents // output - es el array de los eventos
    //const { currenteDate } = dataEvents //el nombre de la const debe ser igual a la key para que lo tome, sino sera undefined
    const { tuki } = dataEvents // output - undefined porque NO es una key definida en dataEvents

    //DESTRUCTURING
    const { events, currenteDate, havePerrito } = dataEvents

    console.log("Información para pintar en el dom", dataEvents)
    console.log("events", events)
    console.log("currenteDate", currenteDate)
    console.log("tuki", tuki)
    console.log("Tiene perrito?", havePerrito)
}*/

//DESTRUCTURING OPCION 2
/*const eventsInDom = ({ events, currenteDate, havePerrito }) => {
    
    console.log("events", events)
    console.log("currenteDate", currenteDate)
    console.log("Tiene perrito?", havePerrito)
}*/

//TRES FORMAS DE HACER PETICIONES ASINCRONAS
/*
Opcion 1: Fetch + .then()
Opcion 2: Fetch + Async/await
Opcion 3: Librería Axios  + Async/await
https://axios-http.com/

*/

const getEventsWithAxios = async() => {
    //Llamamos a la libreria e le indicamos el verbo HTTP que queremos utilizar
    const getDataAxios = await axios.get(API_URL_EVENTS)
    const dataEvents = getDataAxios.data
    console.log("getDataAxios", getDataAxios)
    console.log("dataAxios", dataEvents)
}
getEventsWithAxios()

const API_URL_GET_PRODUCTS = "https://fakestoreapi.com/products"

/** 
*@param no use
*@returns return an array of products
*/

const getProducts = async() =>{
    try{
        const responseAxios = await axios.get("https://fakestoreapi.com/products")
        const dataProducts = await responseAxios.data
        console.log("dataProducts", dataProducts)
        return dataProducts;
    }catch (error) {
        console.log("Error status", error.response.status)
        //alert(error.message)
        if (error.response.status == 404 ) {
            alert("La url consultada parece no estar funcionando") 
        } 
    }

    //console.info("responseAxios",responseAxios)
}
getProducts()

const functionToFail = null
const someFunction = () =>{
    const gretting = "Hello Devs"
    
    try{
        console.log("Esto se ejecuta antes de que falle la función")
        //functionToFail()
        console.log("gretting",gretting)
    }catch(error) {
        console.log("Esto  se ejecuta si la función falla")
        console.log("error",error)
        console.log("error message:", error.message)
        console.log("error name:", error.name)
    } finally{
        console.log("Esto se ejecuta al final de la función")
    }
    return gretting;

}
console.log(someFunction())
