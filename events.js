const buttonCounter = document.getElementById("button-counter");
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
})