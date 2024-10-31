function createGrid(size) { 
    reset();
    const container = document.querySelector(".container");

    // Creation of the row 
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.style.cssText = "display : flex; flex : 1";
        row.className = "row";
        container.appendChild(row);

        // Creation of the column
        for (let j = 0; j < size; j++) {
            const column = document.createElement("div");
            column.style.cssText = "display : flex; ; flex : 1 ";
            // column.dataset.opacity = 0.1; // Initial opacity close to 0
            // column.style.opacity = column.dataset.opacity;
            column.className = "column";
            row.appendChild(column);
        }
    }
    const columns = document.querySelectorAll(".column");
    columns.forEach((square) => {
        square.addEventListener('mouseover', () => {
            // // Increasing the opacity by 10 %
            // let opacity = parseFloat(square.dataset.opacity) + 0.1;
            // if (opacity > 1) opacity = 1; 
            
            const color = document.querySelector("#palette")
            let colorPicker = color.value;
            color.addEventListener("input", (event) => {
                colorPicker = target.event.value;
            })

            const opacity = document.querySelector("#opacity");
            let opacitySelector = opacity.value;
            
            opacity.addEventListener("input", (event) => {
                opacitySelector = target.event.value;
            })
            square.style.backgroundColor = colorPicker;
            square.style.opacity = opacitySelector;
        })
    })
}

function reset() {
    const container = document.querySelector(".container");
    while (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }
}

createGrid(16);

const valueSize = document.querySelector("#valueSize");
const inputSize = document.querySelector("#size");

valueSize.textContent = inputSize.value;

// Updating the label with the current number of the slider
inputSize.addEventListener("input", (event) => {
    valueSize.textContent = event.target.value;
})

const valueOpacity = document.querySelector("#valueOpacity");
const inputOpacity = document.querySelector("#opacity");

valueOpacity.textContent = inputOpacity.value;

inputOpacity.addEventListener("input", (event) => {
    valueOpacity.textContent = event.target.value;
})

// Event handler when the button is clicked, a new grid will be created with the value of the slider
const button = document.querySelector(".reset")
button.addEventListener('click', (event) => {
    createGrid(valueSize.textContent);
})

