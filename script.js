const slider = document.querySelector(".range");
const gridContainer = document.querySelector(".grid-container");
const clear = document.querySelector(".clear");

function sizePick(){
    const range = parseInt(slider.value);
    let loopRange = range * range;
    for (let index = 0; index < loopRange; index++) {
        let div = document.createElement("div");
        div.classList.add("grid-element");
        gridContainer.appendChild(div);
    }
    // use css variables gridContainer.style.cssText = "grid-template-columns: repeat(16, 1fr);";
}
sizePick();

slider.addEventListener("mouseup", sizePick);

const gridElements = document.querySelectorAll(".grid-element");

gridElements.forEach(gridElement =>{
    gridElement.addEventListener("mouseover", () =>{
        gridElement.style.cssText = "background-color: black"; 
    });
    clear.addEventListener("click", () =>{
        gridElement.style.cssText = "background-color: white";
    });
});