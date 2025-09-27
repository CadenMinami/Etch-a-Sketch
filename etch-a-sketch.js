

document.addEventListener("DOMContentLoaded", () => {
    // Default grid size
    let gridSize = 16;
    let penColor = "#000000";

    const divContainer = document.getElementById("container");
    const gridSizeInput = document.getElementById("gridSizeInput");
    const penColorInput = document.getElementById("penColorInput");
    const resetButton = document.getElementById("resetButton");

    function createGrid(size) {
        divContainer.innerHTML = "";
        for (let j = 0; j < size; j++) {
            const divColumn = document.createElement("div");
            divColumn.classList.add("column");
            divContainer.append(divColumn);
            for (let i = 0; i < size; i++) {
                const divBox = document.createElement("div");
                divBox.classList.add("divChild");
                divBox.addEventListener("mouseover", applyHover);
                divColumn.appendChild(divBox);
            }
        }
    }

    function applyHover(event) {
        event.target.style.backgroundColor = penColor;
    }

    // Initialize grid
    createGrid(gridSize);

    // Grid size input handler (slider/range input)
    if (gridSizeInput) {
        gridSizeInput.type = "range";
        gridSizeInput.min = 8;
        gridSizeInput.max = 64;
        gridSizeInput.value = gridSize;
        gridSizeInput.step = 1;

        // Optional: show current value next to slider
        let gridSizeLabel = document.getElementById("gridSizeValue");
        function updateGridSize(newSize) {
            gridSize = newSize;
            if (gridSizeLabel) {
                gridSizeLabel.textContent = newSize;
            }
            createGrid(gridSize);
        }
        // Initial label update
        if (gridSizeLabel) {
            gridSizeLabel.textContent = gridSizeInput.value;
        }
        gridSizeInput.addEventListener("input", () => {
            let newSize = parseInt(gridSizeInput.value, 10);
            if (isNaN(newSize) || newSize < 8) {
                newSize = 8;
            } else if (newSize > 64) {
                newSize = 64;
            }
            gridSizeInput.value = newSize;
            updateGridSize(newSize);
        });
    }

    // Pen color input handler
    if (penColorInput) {
        penColorInput.value = penColor;
        penColorInput.addEventListener("input", () => {
            penColor = penColorInput.value;
        });
    }

    // Reset button handler
    if (resetButton) {
        resetButton.addEventListener("click", () => {
            createGrid(gridSize);
        });
    }
});