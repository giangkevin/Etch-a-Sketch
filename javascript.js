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
            column.dataset.opacity = 0.1; // Initial opacity close to 0
            column.style.opacity = column.dataset.opacity;
            column.className = "column";
            row.appendChild(column);
        }
    }
    const columns = document.querySelectorAll(".column");
    columns.forEach((square) => {
        square.addEventListener('mouseover', () => {
            // Increasing the opacity by 10 %
            let opacity = parseFloat(square.dataset.opacity) + 0.1;
            if (opacity > 1) opacity = 1; 
            
            square.dataset.opacity = opacity;
            square.style.backgroundColor = getRandomColor();
            square.style.opacity = opacity;
        })
    })
}

function reset() {
    const container = document.querySelector(".container");
    while (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }
}


function getRandomColor() {
    let value = '0123456789ABCDEF';
    let color = "#";

    for (let i = 0; i < 6; i++){
        color += value[Math.floor(Math.random() * value.length)];
    }

    return color;
}

createGrid(16);


const value = document.querySelector("#value");
const input = document.querySelector("#size");

value.textContent = input.value;

// Updating the label with the current number of the slider
input.addEventListener("input", (event) => {
    value.textContent = event.target.value;
})

// Event handler when the button is clicked, a new grid will be created with the value of the slider
const button = document.querySelector(".reset")
button.addEventListener('click', (event) => {
    createGrid(value.textContent);
})

