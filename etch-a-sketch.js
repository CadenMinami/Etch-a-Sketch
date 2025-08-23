document.addEventListener("DOMContentLoaded", () => {
    const divContainer = document.getElementById("container");
    const gridSize = 16;
    for (let j = 0; j < gridSize; j++) {
        const divColumn = document.createElement("div");
        divColumn.id = "column";
        divContainer.append(divColumn);
        for (let i = 0; i < gridSize; i++) {
            const divBox = document.createElement("div");
            divBox.classList.add("divChild");
            divBox.textContent = "I am div " + (i.toString())
            divColumn.appendChild(divBox);
        }
    }
});
