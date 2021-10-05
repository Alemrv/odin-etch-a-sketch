const slider = document.querySelector(".range");
const gridContainer = document.querySelector(".grid-container");
const clear = document.querySelector(".clear");
const h3 = document.querySelector("h3")
const color = document.querySelector(".color");
const eraser = document.querySelector(".eraser");
const rainbow = document.querySelector(".rainbow");
let colorValue = color.value;
let normal = true;
let multipleColors = false;

color.addEventListener("change", () =>{
    colorValue = color.value;
    normal = true;
    multipleColors = false;
    removeSelected(eraser);
    removeSelected(rainbow);
});

eraser.addEventListener("click", () =>{
    colorValue = "#ffffff";
    normal = true;
    multipleColors = false;
    selected(eraser);
    removeSelected(rainbow);
});

rainbow.addEventListener("click", () =>{
    normal = false;
    multipleColors = true;
    selected(rainbow);
    removeSelected(eraser);
});

function getRandomInt(min, max) {

    return Math.floor(Math.random() * (max - min)) + min;
}

function selected(element) {
    
    element.style.cssText = "border: 3px solid #4392F1";
}

function removeSelected(element) {
    
    element.style.cssText = "border: 0px";
}

function main(){
    const range = parseInt(slider.value);
    const loopRange = range * range;
    gridContainer.textContent = "";
    gridContainer.style.setProperty('grid-template-columns', 'repeat(' + range + ', 1fr)');
    h3.textContent = `${range} x ${range}`;

    for (let index = 0; index < loopRange; index++) {

        const div = document.createElement("div");
        div.classList.add("grid-element");
        gridContainer.appendChild(div);
    }
    if (gridContainer.hasChildNodes()) {

        const gridElements = document.querySelectorAll(".grid-element");

        gridElements.forEach(gridElement =>{

            gridElement.addEventListener("mouseover", () =>{

                if (multipleColors === true) {
                    let r = getRandomInt(1, 256);
                    let g = getRandomInt(1, 256);
                    let b = getRandomInt(1, 256);
                    let rainbowColor = `rgb(${r},${b},${g})`;
                    colorValue = rainbowColor;
                    gridElement.style.setProperty('background-color', colorValue);
                }
                else{
                    gridElement.style.setProperty('background-color', colorValue);
                }
            });

            clear.addEventListener("click", () =>{

                gridElement.style.cssText = "background-color: white";

            });
        });
    }
}
main();

slider.addEventListener("change", main);









