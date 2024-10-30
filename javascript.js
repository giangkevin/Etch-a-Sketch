function createGrid(size) {
    reset();
    const container = document.querySelector(".container");
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.style.cssText = "display : flex; flex : 1";
        row.className = "row";
        container.appendChild(row);
        for (let j = 0; j < size; j++) {
            const column = document.createElement("div");
            column.style.cssText = "display : flex; ; flex : 1 ";
            column.className = "column";
            row.appendChild(column);
        }
    }
    const columns = document.querySelectorAll(".column");
    columns.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = "black";
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


const value = document.querySelector("#value");
const input = document.querySelector("#size");

value.textContent = input.value;

input.addEventListener("input", (event) => {
    value.textContent = event.target.value;
})

const button = document.querySelector(".reset")
button.addEventListener('click', (event) => {
    createGrid(value.textContent);
})