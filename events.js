/*const buttonCounter = document.getElementById("button-counter");
const counterView = document.getElementById("counter-view");

console.log(buttonCounter);
console.log(counterView);

let counter=0;

buttonCounter.addEventListener("click", (event) => {
    console.log(event);
    console.log("click");
    counter++;
    console.log(counter);
    counterView.innerHTML = counter;
})

const inputName = document.getElementById("input-name");
const inputContent = document.getElementById("input-content")
console.log(inputName);
console.log(inputContent);

inputName.addEventListener("change", (event) => {
    console.log("event", event.target.value);
    console.log("change");
    inputContent.textContent = event.target.value;
})

const insideMouse = document.getElementById("inside-mouse");

insideMouse.addEventListener("mouseenter", () => {
    insideMouse.style.backgroundColor = "blue";
})

insideMouse.addEventListener("mouseleave", () => {
    insideMouse.style.backgroundColor = "red";
})*/

//practice checkbox
const listItems = document.getElementById("list-items");
const buttonForm = document.getElementById("button-form");
const inputsCheckbox = document.querySelectorAll(".inputs-checkbox")

buttonForm.addEventListener("click", () =>{
    //console.log("event", event);
    listItems.innerHTML = "";
    inputsCheckbox.forEach((inputCheckbox) =>{
        if(inputCheckbox.checked){
            console.log(inputCheckbox);
            const li = document.createElement("li");
            li.textContent = inputCheckbox.value;
            listItems.appendChild(li)
        }        
    });
})
