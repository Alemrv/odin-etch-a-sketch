const gridContainer = document.querySelector(".grid-container");

for (let index = 0; index < 256; index++) {
    
    let div = document.createElement("div");
    div.classList.add("grid-element");
    gridContainer.appendChild(div);
    
}

const gridElements = document.querySelectorAll(".grid-element");

gridElements.forEach(gridElement =>{
    gridElement.addEventListener("mouseover", () =>{
        gridElement.style.cssText = "background-color: black"; 
    });
});
