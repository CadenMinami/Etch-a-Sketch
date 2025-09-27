

document.addEventListener("DOMContentLoaded", () => {
    function createGrid(gridSize) {
        divContainer.innerHTML = "";
        for (let j = 0; j < gridSize; j++) {
            const divColumn = document.createElement("div");
            divColumn.classList.add("column");
            divContainer.append(divColumn);
            for (let i = 0; i < gridSize; i++) {
                const divBox = document.createElement("div");
                divBox.classList.add("divChild");
                divBox.addEventListener("mouseover", applyHover);
                divColumn.appendChild(divBox);
            }
        }

    }
    function applyHover(event) {
        event.target.style.backgroundColor = "black";
    }

   
    const divContainer = document.getElementById("container");
    const GRIDSIZE = 16;
    createGrid(GRIDSIZE);


    //Adding the hover functionality of the etch-a-sketch
    const hoveritem = document.querySelectorAll("div.divChild");

    hoveritem.forEach(Element => {
        Element.addEventListener("mouseover", applyHover)
    })

    const gridSizeAdjustorBtn = document.getElementById("gridSize");
    gridSizeAdjustorBtn.addEventListener("click", () => {
        let userInput = prompt("Enter desired amount of squares per side: (Max 100)")
        let size = parseInt(userInput);
        if (isNaN(size) || size <= 0) {
            alert("Please enter a valid number!");
            return;
        }
        if (size > 100) {
            alert("Maximum allowed is 100!");
            return;
        }

        createGrid(size);
    });

    

});