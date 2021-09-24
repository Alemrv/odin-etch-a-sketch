const slider = document.querySelector(".range");
const gridContainer = document.querySelector(".grid-container");
const clear = document.querySelector(".clear");
const h3 = document.querySelector("h3")
const color = document.querySelector(".color");
let colorValue = color.value;

color.addEventListener("change", () =>{
    colorValue = color.value;
    console.log(colorValue);
});

function main(){
    const range = parseInt(slider.value);
    const loopRange = range * range;
    gridContainer.textContent = "";
    gridContainer.style.setProperty('grid-template-columns', 'repeat(' + range + ', 1fr)');
    h3.textContent = range + "X" + range;

    for (let index = 0; index < loopRange; index++) {

        const div = document.createElement("div");
        div.classList.add("grid-element");
        gridContainer.appendChild(div);
    }
    if (gridContainer.hasChildNodes()) {

        const gridElements = document.querySelectorAll(".grid-element");

        gridElements.forEach(gridElement =>{

            gridElement.addEventListener("mouseover", () =>{

                gridElement.style.setProperty('background-color', colorValue);
            });

            clear.addEventListener("click", () =>{

                gridElement.style.cssText = "background-color: white";

            });
        });
    }
}
main();

slider.addEventListener("change", main);












